'use client';

import { useState } from 'react';
import { floorOptions, interestOptions, site } from '@/lib/site';
import { WhatsAppIcon } from './Icons';

type Values = {
  name: string;
  phone: string;
  email: string;
  moveIn: string;
  floor: string;
  interest: string;
  message: string;
};

const initial: Values = {
  name: '',
  phone: '',
  email: '',
  moveIn: '',
  floor: floorOptions[0],
  interest: interestOptions[0],
  message: '',
};

type Errors = Partial<Record<'name' | 'phone' | 'email', string>>;

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = 'Please enter your full name.';
  if (values.phone.replace(/\D/g, '').length < 7) errors.phone = 'Please enter a valid phone number.';
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = 'Please enter a valid email address.';
  return errors;
}

function buildMessage(values: Values) {
  const lines = [
    `Hello ${site.name}, I'd like a quote for a 3-bed, 2-bath apartment.`,
    '',
    `Name: ${values.name}`,
    `Phone: ${values.phone}`,
    values.email ? `Email: ${values.email}` : null,
    values.moveIn ? `Preferred move-in: ${values.moveIn}` : null,
    `Preferred floor: ${values.floor}`,
    `Interested in: ${values.interest}`,
    values.message ? `Notes: ${values.message}` : null,
  ].filter(Boolean);
  return lines.join('\n');
}

/** Inquiry form that hands the completed details off to WhatsApp. */
export default function QuoteForm() {
  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = <K extends keyof Values>(key: K, value: Values[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(buildMessage(values))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  return (
    <form className="quote__card" noValidate onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="q-name">
          Full Name<span className="req">*</span>
        </label>
        <input
          id="q-name"
          name="name"
          placeholder="Enter your full name"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          value={values.name}
          onChange={(e) => set('name', e.target.value)}
        />
        {errors.name && <span className="field__error">{errors.name}</span>}
      </div>

      <div className="field__row">
        <div className="field">
          <label htmlFor="q-phone">
            Phone Number<span className="req">*</span>
          </label>
          <input
            id="q-phone"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            value={values.phone}
            onChange={(e) => set('phone', e.target.value)}
          />
          {errors.phone && <span className="field__error">{errors.phone}</span>}
        </div>
        <div className="field">
          <label htmlFor="q-email">Email Address</label>
          <input
            id="q-email"
            name="email"
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            value={values.email}
            onChange={(e) => set('email', e.target.value)}
          />
          {errors.email && <span className="field__error">{errors.email}</span>}
        </div>
      </div>

      <div className="field__row">
        <div className="field">
          <label htmlFor="q-date">Preferred Move-In Date</label>
          <input
            id="q-date"
            name="moveIn"
            type="date"
            value={values.moveIn}
            onChange={(e) => set('moveIn', e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="q-floor">Preferred Floor</label>
          <select
            id="q-floor"
            name="floor"
            value={values.floor}
            onChange={(e) => set('floor', e.target.value)}
          >
            {floorOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <span className="field__legend">I’m Interested In</span>
        <div className="segmented" role="radiogroup" aria-label="I'm interested in">
          {interestOptions.map((option) => (
            <label key={option} className={values.interest === option ? 'is-active' : ''}>
              <input
                type="radio"
                name="interest"
                value={option}
                checked={values.interest === option}
                onChange={() => set('interest', option)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      <div className="field">
        <label htmlFor="q-message">Additional Requirements / Message</label>
        <textarea
          id="q-message"
          name="message"
          rows={4}
          placeholder="Tell us anything else you'd like us to know..."
          value={values.message}
          onChange={(e) => set('message', e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn--primary btn--wide">
        <WhatsAppIcon size={19} /> Request Quote via WhatsApp
      </button>

      {sent && (
        <p className="field__success">
          Thanks — your details opened in WhatsApp. If nothing happened, call us on {site.phone}.
        </p>
      )}

      <p className="quote__privacy">
        Your information will be used only to respond to your property inquiry.
      </p>
    </form>
  );
}
