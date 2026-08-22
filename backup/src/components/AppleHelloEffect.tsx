import type { TargetAndTransition } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const initialProps: TargetAndTransition = {
  pathLength: 0,
  opacity: 0,
};

const animateProps: TargetAndTransition = {
  pathLength: 1,
  opacity: 1,
};

type Props = React.ComponentProps<typeof motion.svg> & {
  speed?: number;
  onAnimationComplete?: () => void;
};

export function AppleHelloVietnameseEffect({
  className,
  speed = 1,
  onAnimationComplete,
  ...props
}: Props) {
  const calc = (x: number) => x * speed;

  return (
    <motion.svg
      className={cn("h-20", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1009 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="14.8883"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      <title>xin chào</title>

      {/* x1 */}
      <motion.path
        d="M102.233 96.2277C75.6823 127.245 45.1612 158.759 11.4143 190.521"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.3),
          ease: "easeInOut",
          opacity: { duration: 0.15 },
        }}
      />

      {/* x2 */}
      <motion.path
        d="M7.69214 116.575C9.67725 105.16 16.8733 95.7311 28.5358 95.7311C40.4465 95.7311 46.8981 105.408 53.3497 124.019C56.7409 133.283 60.1322 142.547 63.5234 151.81C73.689 179.58 81.1988 191.513 100.855 191.513C128.722 191.513 154.043 159.148 161.595 118.502C162.929 111.321 164.774 103.736 166.043 96.2273"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.7),
          ease: "easeInOut",
          delay: calc(0.4),
          opacity: { duration: 0.35, delay: calc(0.4) },
        }}
      />

      {/* i */}
      <motion.path
        d="M166.043 96.2273C163.191 113.101 160.565 126.997 158.92 139.404C157.989 147.592 157.544 154.54 157.596 161.488C157.729 179.354 164.764 191.513 182.695 191.513C209.39 191.513 236.181 159.123 243.73 118.5C245.064 111.321 247.012 103.759 248.139 96.2273"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.5),
          ease: "easeOut",
          delay: calc(1),
          opacity: { duration: 0.25, delay: calc(1) },
        }}
      />

      {/* n1 */}
      <motion.path
        d="M248.139 96.2278C243.424 127.741 239.454 158.759 234.491 190.272"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.3),
          ease: "easeOut",
          delay: calc(1.5),
          opacity: { duration: 0.15, delay: calc(1.5) },
        }}
      />

      {/* n2 */}
      <motion.path
        d="M237.873 167.951C244.704 121.32 265.508 94.2422 290.322 94.2422C307.692 94.2422 316.625 106.153 315.136 123.026C313.896 135.681 309.677 150.322 308.685 162.729C307.444 179.85 316.499 191.513 330.769 191.513C348.722 191.513 359.309 179.314 364.143 165.965"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.9),
          ease: "easeOut",
          delay: calc(1.8),
          opacity: { duration: 0.45, delay: calc(1.8) },
        }}
      />

      {/* c, h1 */}
      <motion.path
        d="M535.91 109.876C531.265 100.446 520.943 93.4984 505.459 93.4984C476.516 93.4984 462.044 117.816 462.044 143.374C462.044 171.503 482.265 192.506 511.307 192.506C559.762 192.506 592.902 136.708 621.581 97.8807C640.764 71.9101 649.874 49.2359 650.372 31.1674C650.62 17.7684 644.168 7.60362 632.01 7.60362C618.61 7.60362 610.173 17.7684 604.963 41.1011C599.255 66.7441 595.037 96.1684 584.367 190.521"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(1.1),
          ease: "easeInOut",
          delay: calc(2.6),
          opacity: { duration: 0.55, delay: calc(2.6) },
        }}
      />

      {/* h2 */}
      <motion.path
        d="M585.413 181.299C590.677 135.025 611.663 98.2125 638.213 98.2125C654.094 98.2125 664.187 110.868 661.321 128.982C659.708 139.652 656.794 152.059 655.128 164.217C653.102 179.602 658.89 191.513 676.813 191.513C702.178 191.513 717.375 164.077 725.613 135.196"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(1),
          ease: "easeInOut",
          delay: calc(3.6),
          opacity: { duration: 0.5, delay: calc(3.6) },
        }}
      />

      {/* a1 */}
      <motion.path
        d="M803.871 112.995C799.007 101.8 788.666 94.2423 772.207 94.2423C744.912 94.2423 724.398 121.538 723.052 150.818C721.878 177.617 734.244 192.681 751.857 192.505C776.858 192.255 795.234 167.699 803.437 115.742C804.449 109.332 805.498 102.638 806.51 96.2274"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.8),
          ease: "easeOut",
          delay: calc(4.6),
          opacity: { duration: 0.4, delay: calc(4.6) },
        }}
      />

      {/* a2, o */}
      <motion.path
        d="M806.51 96.2274C805.486 102.73 804.461 109.232 803.436 115.735C798.955 144.175 796.887 155.395 797.109 162.729C797.628 179.85 803.785 191.513 820.064 191.513C842.563 191.513 860.966 164.721 870.266 138.289C879.653 111.612 891.315 94.9867 915.633 94.9867C935.732 94.9867 951.613 109.875 951.613 137.915C951.613 168.932 931.489 192.257 906.059 192.505C883.681 192.753 868.983 174.639 870.471 147.344C872.208 117.071 890.571 94.9867 914.64 94.9867C928.536 94.9867 940.207 101.164 949.38 107.89C974.247 126.031 993.407 114.82 1000.74 96.8832"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(1.5),
          ease: "easeOut",
          delay: calc(5.4),
          opacity: { duration: 0.75, delay: calc(5.4) },
        }}
      />

      {/* sign */}
      <motion.path
        className="stroke-primary"
        d="M763.027 19.3039C768.734 34.6886 780.397 48.3362 792.059 55.5322"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.8),
          ease: "easeInOut",
          delay: calc(7),
          opacity: { duration: 0.4, delay: calc(7) },
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </motion.svg>
  );
}

export function AppleHelloEnglishEffect({
  className,
  speed = 1,
  onAnimationComplete,
  ...props
}: Props) {
  const calc = (x: number) => x * speed;

  return (
    <motion.svg
      className={cn("h-20", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 638 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="14.8883"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      <title>hello</title>

      {/* h1 */}
      <motion.path
        d="M8.69214 166.553C36.2393 151.239 61.3409 131.548 89.8191 98.0295C109.203 75.1488 119.625 49.0228 120.122 31.0026C120.37 17.6036 113.836 7.43883 101.759 7.43883C88.3598 7.43883 79.9231 17.6036 74.7122 40.9363C69.005 66.5793 64.7866 96.0036 54.1166 190.356"
        style={{ strokeLinecap: "round", willChange: "transform, opacity" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.8),
          ease: "easeInOut",
          opacity: { duration: 0.4 },
        }}
      />

      {/* h2, ello */}
      <motion.path
        d="M55.1624 181.135C60.6251 133.114 81.4118 98.0479 107.963 98.0479C123.844 98.0479 133.937 110.703 131.071 128.817C129.457 139.487 127.587 150.405 125.408 163.06C122.869 178.941 130.128 191.348 152.122 191.348C184.197 191.348 219.189 173.523 237.097 145.915C243.198 136.509 245.68 128.073 245.928 119.884C246.176 104.996 237.739 93.8296 222.851 93.8296C203.992 93.8296 189.6 115.17 189.6 142.465C189.6 171.745 205.481 192.341 239.208 192.341C285.066 192.341 335.86 137.292 359.199 75.8585C365.788 58.513 368.26 42.4065 368.26 31.1512C368.26 17.8057 364.042 7.55823 352.131 7.55823C340.469 7.55823 332.777 16.6141 325.829 30.9129C317.688 47.4967 311.667 71.4162 309.203 98.4549C303 166.301 316.896 191.348 349.936 191.348C390 191.348 434.542 135.534 457.286 75.6686C463.803 58.513 466.275 42.4065 466.275 31.1512C466.275 17.8057 462.057 7.55823 450.146 7.55823C438.484 7.55823 430.792 16.6141 423.844 30.9129C415.703 47.4967 409.682 71.4162 407.218 98.4549C401.015 166.301 414.911 191.348 444.416 191.348C473.874 191.348 489.877 165.67 499.471 138.402C508.955 111.447 520.618 94.8221 544.935 94.8221C565.035 94.8221 580.916 109.71 580.916 137.75C580.916 168.768 560.792 192.093 535.362 192.341C512.984 192.589 498.285 174.475 499.774 147.179C501.511 116.907 519.873 94.8221 543.943 94.8221C557.839 94.8221 569.51 100.999 578.682 107.725C603.549 125.866 622.709 114.656 630.047 96.7186"
        style={{ strokeLinecap: "round", willChange: "transform, opacity" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(2.8),
          ease: "easeInOut",
          delay: calc(0.7),
          opacity: { duration: 0.7, delay: calc(0.7) },
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </motion.svg>
  );
}

export function AppleHelloItalianEffect({
  className,
  speed = 1,
  onAnimationComplete,
  ...props
}: Props) {
  const calc = (seconds: number) => seconds * speed;

  const pathStyle = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 20,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const initial = {
    pathLength: 0,
    opacity: 0,
  };

  const animate = {
    pathLength: 1,
    opacity: 1,
  };

  return (
    <motion.svg
      className={cn("h-20", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1228 396"
      fill="none"
      {...props}
    >
      <title>Ciao</title>

      {/* =====================================================
          1. C
          ===================================================== */}
      <motion.path
        d="M379 151C359.674 182.463 352.267 220.9 328.641 249.883C325.754 253.425 322.844 251.064 319 251.843C312.129 253.234 303.019 256.985 298.171 262.044C288.346 272.295 280.622 284.574 270.91 295C242.627 325.365 209.283 353.451 170 368.316C140.457 379.495 105.89 390.128 74 383.8C61.114 381.243 48.278 377.603 39.7492 366.829C33.1837 358.536 30.4479 347.177 28.3997 337C26.5188 327.654 25.6485 319.444 27.4606 310C31.8331 287.212 44.4129 266.375 58 248C86.8668 208.962 125.238 175.146 167 150.452C185.009 139.803 208.538 127.879 230 130.87C239.689 132.22 250.323 135.092 253.208 146C255.916 156.236 248.756 170.431 246 180"
        {...pathStyle}
        initial={initial}
        animate={animate}
        transition={{
          duration: calc(1.15),
          delay: calc(0),
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* =====================================================
          2. I — main stroke
          ===================================================== */}
      <motion.path
        d="M326 254C324.388 274.392 316.413 293.009 313.145 313C311.642 322.195 309.482 332.686 310.09 342C311.126 357.865 318.553 376.409 336 379.66C344.503 381.245 356.67 378.572 365 376.486C394.394 369.124 421.305 341.693 442 321C452.545 310.455 469.829 288.323 485 303"
        {...pathStyle}
        initial={initial}
        animate={animate}
        transition={{
          duration: calc(0.65),
          delay: calc(1.0),
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* =====================================================
          3. I — dot
          ===================================================== */}
      <motion.path
        d="M464 7L422 60"
        {...pathStyle}
        initial={initial}
        animate={animate}
        transition={{
          duration: calc(0.22),
          delay: calc(1.55),
          ease: "easeOut",
        }}
      />

      {/* =====================================================
          4. A + connection toward O

          Rapid Resizer produced this as the large middle
          continuous handwriting stroke.
          ===================================================== */}
      <motion.path
        d="M1103 195C1106.85 201.017 1104.81 209.195 1104.05 216C1102.01 234.183 1097.36 250.368 1089.77 267C1084.5 278.55 1078.21 289.524 1071.02 300C1042.28 341.921 994.08 404.686 935 380.24C906.403 368.407 902.45 328.619 904.925 302C905.632 294.403 909.868 274.843 896 276.576C878.187 278.803 867.332 297.108 855.961 309C834.014 331.952 808.415 356.451 780 371.216C768.766 377.053 749.746 382.305 737 379.61C722.403 376.524 714.861 362.479 712.424 349C707.879 323.851 712.896 298.255 720.34 274C722.458 267.1 730.024 238.151 719.995 236.411C700.082 232.957 683.148 255.937 671.911 268C639.884 302.381 606.152 338.392 565 361.871C548.225 371.442 523.517 381.301 506.289 366.649C492.555 354.968 481.822 319.675 487.485 302C491.239 290.285 501.433 279.256 508.051 269C545.984 210.211 614.777 158.563 681 136.003C709.776 126.2 759.941 121.012 779 151"
        {...pathStyle}
        initial={initial}
        animate={animate}
        transition={{
          duration: calc(1.65),
          delay: calc(1.7),
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* =====================================================
          5. O — upper/entry stroke

          This used to be embedded inside the C path.
          It is now separate so it doesn't animate early.
          ===================================================== */}
      <motion.path
        d="M907 282C932.299 229.965 960.783 175.745 1012 144.32C1031.51 132.35 1076.09 117.647 1085.07 151C1086.17 155.076 1085.32 158.895 1085 163"
        {...pathStyle}
        initial={initial}
        animate={animate}
        transition={{
          duration: calc(0.7),
          delay: calc(3.0),
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* =====================================================
          6. O — finishing tail
          ===================================================== */}
      <motion.path
        d="M1106 198C1115.78 188.345 1131.89 192 1145 192C1171.05 192 1194.97 187.83 1220 181"
        {...pathStyle}
        initial={initial}
        animate={animate}
        transition={{
          duration: calc(0.4),
          delay: calc(3.55),
          ease: [0.22, 1, 0.36, 1],
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </motion.svg>
  );
}