interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'error';
  children: React.ReactNode;
}
