interface HamburgerIconProps {
  isOpen: boolean;
}

const HamburgerIcon = ({ isOpen }: HamburgerIconProps) => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {isOpen ? (
      <path d="M18 6L6 18M6 6l12 12" />
    ) : (
      <path d="M3 6h18M3 12h18M3 18h18" />
    )}
  </svg>
);

export default HamburgerIcon;
