export interface FrDropboxProps {
  label?: string;
  size?: 'S' | 'M' | 'L';
  style?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  mainIcon?: {
    name: string;
  };
  leftIcon?: {
    name: string;
  };
  rightIcon?: {
    name: string;
  };
}
