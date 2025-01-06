export interface ButtonProps {
  title: string;
  onClick?: () => void;
  href: string;
  variant?: 'white' | 'black';
  className?: string;
}
