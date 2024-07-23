"use client";

interface ScrollProps {
  value: string;
  direction: "up" | "down";
  pixels: number;
  bottomOffset?: number;
  className?: string;
  button: boolean;
}

export default function ScrollingButton({
  value,
  direction,
  pixels,
  className,
  button,
  bottomOffset = 0, // Default value for scroll back amount
}: ScrollProps) {
  const scrollByPixels = () => {
    const scrollAmount = direction === "down" ? pixels : -pixels;
    window.scrollBy({
      top: scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollBack = (offset: number) => {
    window.scrollBy({
      top: -offset,
      behavior: "smooth",
    });
  };

  const handleClick = () => {
    scrollByPixels();
    setTimeout(() => scrollBack(bottomOffset), 1000); // Adjust the timeout duration as needed
  };

  return (
    <>
      {button ? (
        <p className={className} onClick={handleClick}>
          {value}
        </p>
      ) : (
        <li className={className} onClick={handleClick}>
          {value}
        </li>
      )}
    </>
  );
}
