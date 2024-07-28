"use client";

interface ScrollProps {
  value: string;
  pixels?: number;
  scrollToEnd?: boolean;
  bottomOffset?: number;
  className?: string;
  button: boolean;
  viewHeight?: boolean;
}

export default function ScrollingButton({
  value,
  pixels = 0,
  scrollToEnd = false,
  viewHeight = false,
  className,
  button,
  bottomOffset = 0,
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
      const scrollAmount = viewportHeight + pixels;
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
