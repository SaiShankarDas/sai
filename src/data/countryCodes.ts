export interface Country {
  name: string;
  dial_code: string;
  code: string;
}

export const countryCodes: Country[] = [
  { name: 'India', dial_code: '+91', code: 'IN' },
  { name: 'United States', dial_code: '+1', code: 'US' },
  { name: 'United Kingdom', dial_code: '+44', code: 'GB' },
  { name: 'Australia', dial_code: '+61', code: 'AU' },
  { name: 'Canada', dial_code: '+1', code: 'CA' },
  { name: 'Germany', dial_code: '+49', code: 'DE' },
  { name: 'France', dial_code: '+33', code: 'FR' },
  { name: 'Brazil', dial_code: '+55', code: 'BR' },
  { name: 'China', dial_code: '+86', code: 'CN' },
  { name: 'Japan', dial_code: '+81', code: 'JP' },
  { name: 'Nigeria', dial_code: '+234', code: 'NG' },
  { name: 'South Africa', dial_code: '+27', code: 'ZA' },
  { name: 'United Arab Emirates', dial_code: '+971', code: 'AE' },
  { name: 'Singapore', dial_code: '+65', code: 'SG' },
  { name: 'Other', dial_code: '', code: 'OTHER' },
];
