import clsx from 'clsx'
import React, { type SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

export function LogoBrandMark({
  className,
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  props?: Props
}) {
  return (
    <svg
      viewBox="0 0 891 254"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={clsx(invert ? 'fill-sky-100' : 'fill-sky-950', className)}
      {...props}
    >
      <g id="Sites">
        <path d="M833.417 165.562C817.289 165.562 808.457 184.763 808.457 200.315C808.457 201.659 808.457 202.811 808.649 203.963C801.929 206.843 795.017 208.571 787.913 209.147C785.801 209.915 784.649 211.643 784.649 212.987C784.649 214.523 785.801 215.099 788.489 215.099C795.593 214.331 802.889 211.643 809.033 207.995C810.953 214.715 819.593 225.275 819.593 232.571C819.593 236.027 818.057 240.251 812.489 240.251C804.233 240.251 800.585 230.843 796.361 230.843C792.521 233.147 787.721 237.179 787.721 241.979C787.721 249.275 798.089 253.499 804.809 253.499C821.897 253.499 831.305 236.219 831.305 220.667C831.305 212.987 829.001 205.307 824.585 198.971C830.153 193.595 839.369 179.387 839.369 171.323C839.369 167.867 837.641 165.562 833.417 165.562ZM829.577 177.659C829.577 181.691 825.545 189.563 823.049 193.211C822.857 191.867 822.665 190.523 822.665 188.987C822.665 182.843 825.161 175.163 828.041 175.163C829.385 175.163 829.577 176.123 829.577 177.659Z" />
        <path d="M787.415 185.998C787.415 182.542 786.071 179.47 780.887 177.934C779.351 176.974 777.431 176.59 775.319 176.59C751.127 176.59 729.239 203.278 729.239 228.238C729.239 244.174 734.615 253.39 751.511 253.39C764.759 253.39 780.311 237.262 780.311 232.846C780.311 230.734 779.735 229.198 778.007 229.198C772.823 229.198 764.951 241.486 756.695 241.486C750.167 241.486 747.479 236.302 746.711 230.158C759.767 220.558 787.415 198.478 787.415 185.998ZM768.599 186.19C770.135 186.19 770.903 186.958 770.903 188.302C770.903 197.71 754.007 214.99 746.519 221.326C746.711 209.23 757.463 186.19 768.599 186.19Z" />
        <path d="M695.922 178.813C694.002 180.541 692.466 182.269 692.466 184.573C692.466 187.645 696.69 192.061 701.874 194.941C696.69 213.373 692.658 230.077 692.658 236.797C692.658 246.589 696.306 253.693 707.058 253.693C714.354 253.693 724.146 247.741 724.146 244.285C723.57 241.597 722.034 240.061 719.73 240.061C718.962 240.061 718.386 240.061 717.618 240.445C709.938 240.445 708.21 234.685 708.21 228.541C708.21 223.741 711.282 211.261 715.506 196.669C722.994 194.365 731.25 188.797 731.25 185.725L730.674 181.501C727.026 182.461 723.186 183.037 719.538 183.037C726.45 160.573 734.13 137.341 735.666 131.965C733.746 129.085 732.21 128.893 727.986 128.893C725.106 128.893 722.226 129.661 721.65 132.733C719.154 138.301 712.05 159.421 705.714 181.693C702.45 180.925 699.186 179.965 695.922 178.813Z" />
        <path d="M660.453 253.57C662.949 253.57 665.445 252.418 666.981 249.538C669.477 230.722 680.997 209.026 680.997 190.786C680.421 186.178 680.997 177.154 675.429 177.154C667.173 177.922 656.805 180.034 656.805 189.058C656.805 190.402 663.525 187.906 663.525 202.306C663.525 215.938 652.965 232.834 652.965 246.274C652.965 250.69 656.613 253.57 660.453 253.57ZM686.949 152.578C686.949 148.546 684.453 145.666 680.613 145.666C674.661 145.666 668.709 152.194 668.709 157.954C668.709 161.986 671.205 165.058 675.237 165.058C681.189 165.058 686.949 158.914 686.949 152.578Z" />
        <g>
          <path
            d="M569.294 140.006C566.838 133.33 566.319 128.731 565.791 124.928C562.115 127.121 551.835 134.3 547.442 142.782C541.912 153.46 544.804 158.926 549.89 161.189C554.978 163.449 563.157 161.795 570.908 157.119C573.436 155.595 575.194 154.669 577.72 152.566C574.688 149.966 571.357 145.501 569.294 140.006Z"
            className="coastal_sites__Sites__S__tail"
          />
          <path
            d="M567.295 112.437C569.089 106.181 572.019 99.4265 577.789 92.8795C572.955 92.5935 566.51 91.589 559.639 93.949C547.451 98.131 542.112 104.371 543.633 109.444C545.016 114.063 554.253 117.031 567.295 112.437Z"
            className="coastal_sites__Sites__S__left_leg"
          />
          <path
            d="M575.226 79.6571C577.569 79.4247 579.628 77.8946 586.961 76.3564C590.458 75.5983 594.371 76.3101 597.525 78C602.339 76.2893 610.583 72.8127 622.756 72.9591C628.851 73.0344 632.359 73.8304 639.753 76.5162C636.056 69.8526 625.196 62.0853 612.464 60.3882C596.92 58.315 581.22 64.9314 574.7 71.0976C568.181 77.2666 572.884 79.891 575.226 79.6571Z"
            className="coastal_sites__Sites__S__left_arm"
          />
          <path
            d="M679.026 81.9218C665.724 79.1798 653.96 85.0858 653.47 85.3368C656.038 88.5518 658.074 92.0088 659.731 95.6368C661.395 99.2828 662.41 103.286 662.831 107.396C666.038 107.701 671.775 109.844 675.087 111.366C678.569 112.968 684.448 115.026 692.27 111.996C700.091 108.965 704.487 101.926 704.487 101.926C701.973 95.5208 692.612 84.7228 679.026 81.9218ZM691.841 101.274C690.344 101.274 689.13 100.033 689.13 98.5018C689.13 96.9718 690.344 95.7298 691.841 95.7298C693.337 95.7298 694.55 96.9718 694.55 98.5018C694.55 100.032 693.337 101.274 691.841 101.274Z"
            className="coastal_sites__Sites__S__head"
          />
          <path
            d="M611.814 141.288C611.814 143.208 614.118 145.896 616.614 146.664C619.11 147.432 622.963 147.501 624.499 147.501C644.851 147.501 661.926 131.688 661.926 109.992C661.926 88.2957 642.726 73.5117 621.99 73.5117C593.766 73.5117 566.694 95.2077 566.694 124.392C566.694 166.632 625.83 171.432 625.83 210.216C625.83 231.528 609.894 244.2 589.734 244.2C563.622 244.2 564.198 224.04 556.71 224.04C551.334 224.04 549.798 226.728 549.798 233.256C549.798 249 571.686 253.608 584.166 253.608C612.198 253.608 642.726 232.68 642.726 202.344C642.726 162.792 581.478 158.76 581.478 118.44C581.478 97.8957 595.11 83.1117 616.038 83.1117C636.198 83.1117 647.91 98.8557 647.91 115.944C647.91 128.808 638.773 141.666 625.499 141.501C621.622 141.452 619.999 140.001 615.846 139.176C612.999 138.501 611.814 139.944 611.814 141.288Z"
            className="coastal_sites__Sites__S__S_2"
          />
        </g>
      </g>
      <g id="Coastal">
        <path
          d="M454.223 236.437C454.223 246.229 457.871 253.333 468.623 253.333C475.919 253.333 485.711 247.381 485.711 243.925C485.135 241.237 483.599 239.701 481.295 239.701C480.527 239.701 479.951 239.701 479.183 240.085C471.503 240.085 469.775 234.325 469.775 228.181C469.775 215.125 494.543 141.589 497.231 131.605C495.311 128.725 493.775 128.533 489.551 128.533C486.671 128.533 483.791 129.301 483.215 132.373C478.031 143.701 454.223 220.309 454.223 236.437Z"
          className="coastal_sites__Coastal__l"
        />
        <path
          d="M416.728 236.516C416.728 246.308 420.376 253.412 431.128 253.412C438.424 253.412 448.216 247.46 448.216 244.004C447.64 241.316 446.104 239.78 443.8 239.78C443.032 239.78 442.456 239.78 441.688 240.164C434.008 240.164 432.28 234.404 432.28 228.26C432.28 215.204 443.224 194.468 446.104 184.484C444.184 181.604 442.648 181.412 438.424 181.412C436.12 181.412 434.008 181.796 432.856 183.332C419.608 201.572 400.216 238.436 392.728 238.436C390.808 238.436 390.424 236.132 390.424 228.644C390.424 206.564 404.632 190.628 424.408 185.828C428.248 183.908 430.36 181.412 430.36 179.492C430.36 177.38 428.056 175.844 423.448 175.844C401.752 175.844 372.184 200.996 372.184 235.748C372.184 244.388 376.408 253.412 385.624 253.412C397.144 253.412 408.856 235.748 419.608 218.084C417.88 224.612 416.728 230.948 416.728 236.516Z"
          className="coastal_sites__Coastal__a"
        />
        <path
          d="M334.677 178.41C332.757 180.138 331.221 181.866 331.221 184.17C331.221 187.242 335.445 191.658 340.629 194.538C335.445 212.97 331.413 229.674 331.413 236.394C331.413 246.186 335.061 253.29 345.813 253.29C353.109 253.29 362.901 247.338 362.901 243.882C362.325 241.194 360.789 239.658 358.485 239.658C357.717 239.658 357.141 239.658 356.373 240.042C348.693 240.042 346.965 234.282 346.965 228.138C346.965 223.338 350.037 210.858 354.261 196.266C361.749 193.962 370.005 188.394 370.005 185.322L369.429 181.098C365.781 182.058 361.941 182.634 358.293 182.634C365.205 160.17 372.885 136.938 374.421 131.562C372.501 128.682 370.965 128.49 366.741 128.49C363.861 128.49 360.981 129.258 360.405 132.33C357.909 137.898 350.805 159.018 344.469 181.29C341.205 180.522 337.941 179.562 334.677 178.41Z"
          className="coastal_sites__Coastal__t_2"
        />
        <path
          d="M317.056 165.469C300.928 165.469 292.096 184.669 292.096 200.221C292.096 201.565 292.096 202.717 292.288 203.869C285.568 206.749 278.656 208.477 271.552 209.053C269.44 209.821 268.288 211.549 268.288 212.893C268.288 214.429 269.44 215.005 272.128 215.005C279.232 214.237 286.528 211.549 292.672 207.901C294.592 214.621 303.232 225.181 303.232 232.477C303.232 235.933 301.696 240.157 296.128 240.157C287.872 240.157 284.224 230.749 280 230.749C276.16 233.053 271.36 237.085 271.36 241.885C271.36 249.181 281.728 253.405 288.448 253.405C305.536 253.405 314.944 236.125 314.944 220.573C314.944 212.893 312.64 205.213 308.224 198.877C313.792 193.501 323.008 179.293 323.008 171.229C323.008 167.773 321.28 165.469 317.056 165.469ZM313.216 177.565C313.216 181.597 309.184 189.469 306.688 193.117C306.496 191.773 306.304 190.429 306.304 188.893C306.304 182.749 308.8 175.069 311.68 175.069C313.024 175.069 313.216 176.029 313.216 177.565Z"
          className="coastal_sites__Coastal__s_2"
        />
        <path
          d="M234.713 236.733C234.713 246.525 238.361 253.629 249.113 253.629C256.409 253.629 266.201 247.677 266.201 244.221C265.625 241.533 264.089 239.997 261.785 239.997C261.017 239.997 260.441 239.997 259.673 240.381C251.993 240.381 250.265 234.621 250.265 228.477C250.265 215.421 261.209 194.685 264.089 184.701C262.169 181.821 260.633 181.629 256.409 181.629C254.105 181.629 251.993 182.013 250.841 183.549C237.593 201.789 218.201 238.653 210.713 238.653C208.793 238.653 208.409 236.349 208.409 228.861C208.409 206.781 222.617 190.845 242.393 186.045C246.233 184.125 248.345 181.629 248.345 179.709C248.345 177.597 246.041 176.061 241.433 176.061C219.737 176.061 190.169 201.213 190.169 235.965C190.169 244.605 194.393 253.629 203.609 253.629C215.129 253.629 226.841 235.965 237.593 218.301C235.865 224.829 234.713 231.165 234.713 236.733Z"
          className="coastal_sites__Coastal__a_2"
        />
        <path
          d="M183.426 209.791C184.578 209.791 185.73 209.599 186.69 209.407C188.418 208.447 189.378 207.295 189.378 206.143C189.378 205.183 188.61 204.415 186.69 203.455C178.05 200.767 174.402 193.855 174.402 186.175C174.402 183.103 174.978 179.839 176.13 176.767C175.938 173.119 174.402 171.967 172.482 171.967C169.218 171.967 164.418 175.423 162.882 178.111C162.306 179.263 162.114 180.415 161.922 181.567C160.578 181.375 159.618 181.375 158.082 181.375C133.89 181.375 116.226 206.143 116.226 229.759C116.226 246.463 124.098 253.567 140.226 253.567C160.962 253.567 174.594 229.183 177.858 209.023C179.586 209.599 181.506 209.791 183.426 209.791ZM133.314 221.311C133.314 207.679 143.49 188.095 159.426 188.095C160.194 188.095 161.346 188.287 162.114 188.479C163.074 194.047 165.57 199.807 169.794 203.839C168.066 218.431 157.122 241.663 144.45 241.663C134.85 241.663 133.314 229.375 133.314 221.311Z"
          className="coastal_sites__Coastal__o"
        />
        <path
          d="M96.9609 77.5469C53.569 77.5469 10.7525 134.187 1.72852 182.379L0.384766 191.596C0.192766 194.284 0 196.971 0 199.467C0 225.579 14.9773 253.42 45.6973 253.42C78.1452 253.42 108.674 229.227 108.674 194.475C108.674 190.251 107.905 181.994 102.145 181.994C100.033 181.994 99.0739 183.531 97.9219 184.875C98.3059 187.755 98.4961 190.635 98.4961 193.707C98.4961 217.707 83.52 239.787 56.832 239.787C30.3361 239.787 19.5076 213.287 19.9688 189.1C19.948 185.475 20.0341 184.143 20.1464 181.457C20.1434 181.457 20.1414 181.458 20.1384 181.459C23.2159 150.684 53.9526 91.1796 90.0486 91.1796C98.4966 91.1796 108.674 94.3606 108.674 103.001C107 132.001 80.5 137.001 74.5 135.501C68.5 134.001 74.5 141.481 85.5 140.001C98.4961 138.252 125.5 121.001 122.689 98.2831C122.689 81.5792 111.361 77.5469 96.9609 77.5469Z"
          className="coastal_sites__Coastal__C"
        />
      </g>
      <g id="color_tortuga">
        <g className="coastal_sites__color_tortuga__shellcolors">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M790.533 24.5005C787.596 25.5004 783.055 26.5005 773.999 35.0005C772.226 37.6164 772.952 55.1858 777.505 61.5005C782.059 67.8152 795.505 77.5005 807.599 81.5005C810.622 82.5005 823 79.5005 830.5 68.0005C838 56.5005 834.096 37.0005 819.096 27.5005C808.289 20.6562 793.471 23.5005 790.533 24.5005Z"
            fill="#006FA9"
            className="coastal_sites__color_tortuga__shellcolors__Vector"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M825.381 77.7322L822.01 80.0001C822.01 80.0001 808.927 75.0001 809.426 76.5001C809.426 76.5001 798.545 86.0221 790.524 85.5001C782.503 84.9789 772.799 74.7944 769.024 63.0001C766.074 53.7778 768.782 43.8038 773.619 36C772.119 41.9999 778.222 52.42 784.621 57.0001C791.038 61.592 800.119 63.0001 808.138 65.2233C814.119 68 819.119 69.5 825.381 77.7322Z"
            fill="#47B6A3"
            className="coastal_sites__color_tortuga__shellcolors__Vector_2"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M814.508 23C807.508 20 804.008 20 804.008 20C804.008 20 819.508 30.9999 822.006 36.6815C824.504 42.3631 832.008 45.5 832.008 45.5L829.508 39L825.508 30.9999L820.006 26.1951C820.006 26.1951 821.508 26 814.508 23Z"
            fill="#50BFE7"
            className="coastal_sites__color_tortuga__shellcolors__Vector_3"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M832.582 63.0368L830.949 68.0368C830.949 68.0368 827.082 74.5368 825.082 75.1491C823.082 75.7613 824.582 70.5368 815.011 64.2045C802.128 56.6725 789.067 51.1695 785.238 46.6593C781.408 42.1491 775.265 33.7001 776.082 32.5367C776.082 32.5367 778.082 30.0367 780.582 28.5367C783.082 27.0367 784.792 25.8174 787.582 24.5367C794.082 29.0367 800.082 38.0367 800.082 38.0367C804.71 43.8388 807.234 49.3271 814.058 54.8476C820.88 60.3681 830.949 65.3281 830.949 65.3281C830.949 65.3281 827.178 61.9598 824.077 59.5735C820.976 57.1872 814.63 51.6201 810.669 45.21C806.71 38.8008 798.623 25.1923 791.582 23.0368C794.413 22.4296 808.582 29.5368 808.582 29.5368C808.582 29.5368 813.582 32.5368 819.115 38.7476C829.582 57.0368 834.082 50.5368 833.582 55.5368C833.082 60.5368 832.582 63.0368 832.582 63.0368Z"
            fill="#50BFE7"
            className="coastal_sites__color_tortuga__shellcolors__Vector_4"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M821.619 77.5C815.619 81.5 811.118 85.8494 800.618 87C787.125 88.4786 771.999 82.5 768.999 72.5C766 62.5 765.5 53.5 770.507 41.5C770.507 41.5 769.497 53.3052 773.013 59.5C776.531 65.6955 780.33 72.0265 792.583 75C804.835 77.972 805.12 71 821.619 77.5Z"
            fill="#1D7E70"
            className="coastal_sites__color_tortuga__shellcolors__Vector_5"
          />
        </g>
        <g
          id="color_tortuga_body_parts"
          className={clsx(
            invert ? 'fill-background dark:fill-foreground' : 'fill-foreground',
            className,
          )}
        >
          <path
            d="M754.693 81.4393C752.237 74.7633 751.619 70.5 751.619 66C747.943 68.1928 737.234 75.7336 732.841 84.2153C727.311 94.8936 730.203 100.36 735.289 102.622C740.377 104.883 748.556 103.228 756.307 98.5529C758.835 97.0286 761.093 96.1024 763.619 94C760.587 91.4001 756.756 86.9342 754.693 81.4393Z"
            className="coastal_sites__color_tortuga__body_parts__rightleg"
          />
          <path
            d="M752.915 52.4365C754.709 46.1805 757.638 39.4265 763.408 32.8795C758.574 32.5935 752.13 31.589 745.259 33.949C733.071 38.131 727.732 44.3708 729.253 49.4438C730.636 54.0628 739.873 57.0305 752.915 52.4365Z"
            className="coastal_sites__color_tortuga__body_parts__leftleg"
          />
          <path
            d="M847.571 55.5121C847.005 62.7834 844.62 70.016 840.872 75.898C843.174 77.5766 846.054 81.094 847.066 88.1357C848.416 97.525 843.424 108.371 841.914 111.236C840.402 114.1 840.198 118.914 844.999 118.711C849.8 118.509 860.086 109.022 864.106 97.1955C868.126 85.3712 864.851 70.7332 859.354 64.1076C855.003 58.8579 849.62 56.3336 847.571 55.5121Z"
            className="coastal_sites__color_tortuga__body_parts__rightarm"
          />
          <path
            d="M760.846 19.6571C763.189 19.4247 765.248 17.8946 772.581 16.3564C776.078 15.5983 779.991 16.3101 783.145 18C787.959 16.2893 795.446 12.8537 807.619 13C813.714 13.0753 817.978 13.8304 825.372 16.5162C821.676 9.85261 810.816 2.08531 798.083 0.388154C782.54 -1.68502 766.84 4.9314 760.32 11.0976C753.801 17.2666 758.504 19.891 760.846 19.6571Z"
            className="coastal_sites__color_tortuga__body_parts__leftarrm"
          />
          <path
            d="M864.646 21.9218C851.344 19.1798 839.58 25.0858 839.09 25.3368C841.658 28.5518 843.694 32.0088 845.351 35.6368C847.015 39.2828 848.03 43.2858 848.451 47.3958C851.658 47.7008 857.395 49.8438 860.707 51.3658C864.189 52.9678 870.068 55.0258 877.89 51.9958C885.711 48.9648 890.107 41.9258 890.107 41.9258C887.593 35.5208 878.232 24.7228 864.646 21.9218ZM877.461 41.2738C875.964 41.2738 874.75 40.0328 874.75 38.5018C874.75 36.9718 875.964 35.7298 877.461 35.7298C878.957 35.7298 880.17 36.9718 880.17 38.5018C880.17 40.0318 878.957 41.2738 877.461 41.2738Z"
            className="coastal_sites__color_tortuga__body_parts__head_2"
          />
          <path
            d="M818.619 95.001C835.53 86.501 847.546 71.6877 847.546 49.9917C847.546 28.2957 828.346 13.5117 807.61 13.5117C779.386 13.5117 752.314 35.2077 752.314 64.3917C752.314 86.4601 764.619 93.501 768.619 96.001C772.619 98.501 784.119 101.001 792.119 101.001C804.119 101.001 809.619 99.501 818.619 95.001C815.619 90.501 812.119 83.501 812.119 83.501C799.925 88.0171 786.119 89.0005 775.119 80.001C769.619 75.5012 768 72.501 767.098 58.4397C767.098 37.8957 780.73 23.1117 801.658 23.1117C821.818 23.1117 833.53 38.8557 833.53 55.9437C833.53 68.8077 819.119 80.001 812.119 83.501C812.119 83.501 815.619 90.501 818.619 95.001Z"
            className="coastal_sites__color_tortuga__body_parts__shell"
          />
        </g>
      </g>
    </svg>
  )
}
