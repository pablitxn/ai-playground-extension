interface SelectLanguageProps {
  label: string;
  options: string[];
  onChange: (language: string) => void;
}

interface FormProps {
  onSubmit: (text: string) => void;
}

interface OutputProps {
  translation: string;
}