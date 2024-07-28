"use client";

interface ScrollProps {
  value: string;
  pixels?: number; // Made optional for flexibility
  scrollToEnd?: boolean; // New prop to indicate scrolling to the end of the page
  bottomOffset?: number;
  className?: string;
  button: boolean;
  viewHeight?: boolean;
}

export default function ScrollingButton({
  value,
  pixels,
  scrollToEnd = false,
  viewHeight = false,
  className,
  button,
  bottomOffset = 0, // Default value for scroll back amount
}: ScrollProps) {
  const scrollByPixels = () => {
    if (scrollToEnd) {
      const pageHeight = document.body.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollAmount = pageHeight - viewportHeight - bottomOffset;
      window.scrollBy({
        top: scrollAmount,
        behavior: "smooth",
      });
    } else if (viewHeight) {
      const viewportHeight = window.innerHeight;
      const scrollAmount = viewportHeight;
      window.scrollTo({
        top: scrollAmount,
        behavior: "smooth",
      });
    } else if (pixels) {
      const scrollAmount = pixels;
      window.scrollBy({
        top: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollBack = (offset: number) => {
    window.scrollBy({
      top: -offset,
      behavior: "smooth",
    });
  };

  const handleClick = () => {
    scrollByPixels();
    // setTimeout(() => scrollBack(bottomOffset), 1000); // Adjust the timeout duration as needed
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
