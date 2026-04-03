import Link from "next/link";

interface CtaButtonProps {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "outline" | "cta";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
}

export default function CtaButton({
  href,
  label,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
}: CtaButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-md hover:shadow-lg",
    secondary:
      "bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-400 shadow-md hover:shadow-lg",
    outline:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500",
    cta:
      "bg-[#ec4899] text-white hover:bg-[#db2777] focus:ring-pink-500 shadow-md hover:shadow-lg",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={allClasses}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={allClasses}>
      {label}
    </Link>
  );
}
