import { useState, type ElementType } from 'react';

interface ShatterTextProps {
  text: string;
  as?: ElementType;
  className?: string;
}

// Accessible in-repo fallback for the licensed React Bits Pro component.
// It keeps the public API small so the registry component can replace it directly.
const ShatterText = ({ text, as: Tag = 'span', className = '' }: ShatterTextProps) => {
  const [cracked, setCracked] = useState(false);

  return (
    <Tag
      className={`shatter-text ${cracked ? 'is-cracked' : ''} ${className}`.trim()}
      onClick={() => setCracked(value => !value)}
      data-text={text}
    >
      <span className="shatter-text__base">{text}</span>
      <span aria-hidden="true" className="shatter-text__shard shatter-text__shard--top">{text}</span>
      <span aria-hidden="true" className="shatter-text__shard shatter-text__shard--bottom">{text}</span>
    </Tag>
  );
};

export default ShatterText;
