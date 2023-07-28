import { motion } from "framer-motion";
const HomepageIcon = () => {
const pathVariants = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255,255,255,0)",
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255,255,255,0)",
    transition: { duration: 2, ease: "easeInOut" },
  },
};
    
    return (
      <div className="flex justify-center gap-5 w-72 sm:w-auto">
        <motion.svg
          width="201"
          className="anime_logo"
          height="107"
          viewBox="0 0 201 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          whileHover={{ scale: 1.2 }}
          
        >
          <motion.path
            d="M7.54545 48.0455H7.89853L8.01664 47.7127L12.5779 34.8636H30.6948L35.2561 47.7127L35.3742 48.0455H35.7273H41.6364H42.3526L42.1057 47.3731L25.0148 0.827657L24.8945 0.5H24.5455H18.7273H18.3782L18.2579 0.827657L1.167 47.3731L0.920125 48.0455H1.63636H7.54545ZM21.6364 9.34607L28.5649 28.8636H14.7078L21.6364 9.34607ZM86.2955 1V0.5H85.7955H80.25H79.75V1V36.6946L54.7515 0.714707L54.6023 0.5H54.3409H48.8864H48.3864V1V47.5455V48.0455H48.8864H54.5227H55.0227V47.5455V11.9424L79.9301 47.8305L80.0793 48.0455H80.3409H85.7955H86.2955V47.5455V1ZM103.21 1V0.5H102.71H97.0739H96.5739V1V47.5455V48.0455H97.0739H102.71H103.21V47.5455V1ZM114.011 0.5H113.511V1V47.5455V48.0455H114.011H119.284H119.784V47.5455V13.6067L133.822 47.7357L133.949 48.0455H134.284H139.375H139.71L139.837 47.7357L153.875 13.6068V47.5455V48.0455H154.375H159.648H160.148V47.5455V1V0.5H159.648H152.92H152.585L152.458 0.810556L136.83 38.9829L121.201 0.810556L121.074 0.5H120.739H114.011ZM170.449 47.5455V48.0455H170.949H199.403H199.903V47.5455V42.5455V42.0455H199.403H177.085V27.2273H197.585H198.085V26.7273V21.7273V21.2273H197.585H177.085V6.5H199.04H199.54V6V1V0.5H199.04H170.949H170.449V1V47.5455Z"
            stroke="white"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
        </motion.svg>

        <motion.svg
          width="237"
          className="cards_logo"
          height="107"
          viewBox="0 0 237 107"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          whileHover={{ scale: 0.8 }}
        >
          <mask
            id="path-1-outside-1_0_1"
            maskUnits="userSpaceOnUse"
            x="11.8182"
            y="27.8182"
            width="215"
            height="52"
            fill="black"
          >
            <rect
              fill="white"
              x="11.8182"
              y="27.8182"
              width="215"
              height="52"
            />
            <path d="M53.0909 45H47.4545C47.1212 43.3788 46.5379 41.9545 45.7045 40.7273C44.8864 39.5 43.8864 38.4697 42.7045 37.6364C41.5379 36.7879 40.2424 36.1515 38.8182 35.7273C37.3939 35.303 35.9091 35.0909 34.3636 35.0909C31.5454 35.0909 28.9924 35.803 26.7045 37.2273C24.4318 38.6515 22.6212 40.75 21.2727 43.5227C19.9394 46.2955 19.2727 49.697 19.2727 53.7273C19.2727 57.7576 19.9394 61.1591 21.2727 63.9318C22.6212 66.7045 24.4318 68.803 26.7045 70.2273C28.9924 71.6515 31.5454 72.3636 34.3636 72.3636C35.9091 72.3636 37.3939 72.1515 38.8182 71.7273C40.2424 71.303 41.5379 70.6742 42.7045 69.8409C43.8864 68.9924 44.8864 67.9545 45.7045 66.7273C46.5379 65.4848 47.1212 64.0606 47.4545 62.4545H53.0909C52.6667 64.8333 51.8939 66.9621 50.7727 68.8409C49.6515 70.7197 48.2576 72.3182 46.5909 73.6364C44.9242 74.9394 43.053 75.9318 40.9773 76.6136C38.9167 77.2955 36.7121 77.6364 34.3636 77.6364C30.3939 77.6364 26.8636 76.6667 23.7727 74.7273C20.6818 72.7879 18.25 70.0303 16.4773 66.4545C14.7045 62.8788 13.8182 58.6364 13.8182 53.7273C13.8182 48.8182 14.7045 44.5758 16.4773 41C18.25 37.4242 20.6818 34.6667 23.7727 32.7273C26.8636 30.7879 30.3939 29.8182 34.3636 29.8182C36.7121 29.8182 38.9167 30.1591 40.9773 30.8409C43.053 31.5227 44.9242 32.5227 46.5909 33.8409C48.2576 35.1439 49.6515 36.7348 50.7727 38.6136C51.8939 40.4773 52.6667 42.6061 53.0909 45Z" />
            <path d="M64.1079 77H58.1989L75.2898 30.4545H81.1079L98.1989 77H92.2898L78.3807 37.8182H78.017L64.1079 77ZM66.2898 58.8182H90.1079V63.8182H66.2898V58.8182Z" />
            <path d="M105.449 77V30.4545H121.176C124.812 30.4545 127.797 31.0758 130.131 32.3182C132.464 33.5454 134.191 35.2348 135.312 37.3864C136.434 39.5379 136.994 41.9848 136.994 44.7273C136.994 47.4697 136.434 49.9015 135.312 52.0227C134.191 54.1439 132.472 55.8106 130.153 57.0227C127.835 58.2197 124.873 58.8182 121.267 58.8182H108.54V53.7273H121.085C123.57 53.7273 125.57 53.3636 127.085 52.6364C128.616 51.9091 129.722 50.8788 130.403 49.5455C131.1 48.197 131.449 46.5909 131.449 44.7273C131.449 42.8636 131.1 41.2348 130.403 39.8409C129.706 38.447 128.593 37.3712 127.062 36.6136C125.532 35.8409 123.509 35.4545 120.994 35.4545H111.085V77H105.449ZM127.358 56.0909L138.812 77H132.267L120.994 56.0909H127.358Z" />
            <path d="M160.75 77H146.386V30.4545H161.386C165.902 30.4545 169.765 31.3864 172.977 33.25C176.189 35.0985 178.652 37.7576 180.364 41.2273C182.076 44.6818 182.932 48.8182 182.932 53.6364C182.932 58.4848 182.068 62.6591 180.341 66.1591C178.614 69.6439 176.098 72.3258 172.795 74.2045C169.492 76.0682 165.477 77 160.75 77ZM152.023 72H160.386C164.235 72 167.424 71.2576 169.955 69.7727C172.485 68.2879 174.371 66.1742 175.614 63.4318C176.856 60.6894 177.477 57.4242 177.477 53.6364C177.477 49.8788 176.864 46.6439 175.636 43.9318C174.409 41.2045 172.576 39.1136 170.136 37.6591C167.697 36.1894 164.659 35.4545 161.023 35.4545H152.023V72Z" />
            <path d="M217.841 42.0909C217.568 39.7879 216.462 38 214.523 36.7273C212.583 35.4545 210.205 34.8182 207.386 34.8182C205.326 34.8182 203.523 35.1515 201.977 35.8182C200.447 36.4848 199.25 37.4015 198.386 38.5682C197.538 39.7348 197.114 41.0606 197.114 42.5454C197.114 43.7879 197.409 44.8561 198 45.75C198.606 46.6288 199.379 47.3636 200.318 47.9545C201.258 48.5303 202.242 49.0076 203.273 49.3864C204.303 49.75 205.25 50.0455 206.114 50.2727L210.841 51.5455C212.053 51.8636 213.402 52.303 214.886 52.8636C216.386 53.4242 217.818 54.1894 219.182 55.1591C220.561 56.1136 221.697 57.3409 222.591 58.8409C223.485 60.3409 223.932 62.1818 223.932 64.3636C223.932 66.8788 223.273 69.1515 221.955 71.1818C220.652 73.2121 218.742 74.8258 216.227 76.0227C213.727 77.2197 210.689 77.8182 207.114 77.8182C203.78 77.8182 200.894 77.2803 198.455 76.2045C196.03 75.1288 194.121 73.6288 192.727 71.7045C191.348 69.7803 190.568 67.5455 190.386 65H196.205C196.356 66.7576 196.947 68.2121 197.977 69.3636C199.023 70.5 200.341 71.3485 201.932 71.9091C203.538 72.4545 205.265 72.7273 207.114 72.7273C209.265 72.7273 211.197 72.3788 212.909 71.6818C214.621 70.9697 215.977 69.9848 216.977 68.7273C217.977 67.4545 218.477 65.9697 218.477 64.2727C218.477 62.7273 218.045 61.4697 217.182 60.5C216.318 59.5303 215.182 58.7424 213.773 58.1364C212.364 57.5303 210.841 57 209.205 56.5455L203.477 54.9091C199.841 53.8636 196.962 52.3712 194.841 50.4318C192.72 48.4924 191.659 45.9545 191.659 42.8182C191.659 40.2121 192.364 37.9394 193.773 36C195.197 34.0454 197.106 32.5303 199.5 31.4545C201.909 30.3636 204.598 29.8182 207.568 29.8182C210.568 29.8182 213.235 30.3561 215.568 31.4318C217.902 32.4924 219.75 33.947 221.114 35.7954C222.492 37.6439 223.22 39.7424 223.295 42.0909H217.841Z" />
          </mask>
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M53.0909 45H47.4545C47.1212 43.3788 46.5379 41.9545 45.7045 40.7273C44.8864 39.5 43.8864 38.4697 42.7045 37.6364C41.5379 36.7879 40.2424 36.1515 38.8182 35.7273C37.3939 35.303 35.9091 35.0909 34.3636 35.0909C31.5454 35.0909 28.9924 35.803 26.7045 37.2273C24.4318 38.6515 22.6212 40.75 21.2727 43.5227C19.9394 46.2955 19.2727 49.697 19.2727 53.7273C19.2727 57.7576 19.9394 61.1591 21.2727 63.9318C22.6212 66.7045 24.4318 68.803 26.7045 70.2273C28.9924 71.6515 31.5454 72.3636 34.3636 72.3636C35.9091 72.3636 37.3939 72.1515 38.8182 71.7273C40.2424 71.303 41.5379 70.6742 42.7045 69.8409C43.8864 68.9924 44.8864 67.9545 45.7045 66.7273C46.5379 65.4848 47.1212 64.0606 47.4545 62.4545H53.0909C52.6667 64.8333 51.8939 66.9621 50.7727 68.8409C49.6515 70.7197 48.2576 72.3182 46.5909 73.6364C44.9242 74.9394 43.053 75.9318 40.9773 76.6136C38.9167 77.2955 36.7121 77.6364 34.3636 77.6364C30.3939 77.6364 26.8636 76.6667 23.7727 74.7273C20.6818 72.7879 18.25 70.0303 16.4773 66.4545C14.7045 62.8788 13.8182 58.6364 13.8182 53.7273C13.8182 48.8182 14.7045 44.5758 16.4773 41C18.25 37.4242 20.6818 34.6667 23.7727 32.7273C26.8636 30.7879 30.3939 29.8182 34.3636 29.8182C36.7121 29.8182 38.9167 30.1591 40.9773 30.8409C43.053 31.5227 44.9242 32.5227 46.5909 33.8409C48.2576 35.1439 49.6515 36.7348 50.7727 38.6136C51.8939 40.4773 52.6667 42.6061 53.0909 45Z"
            stroke="#FF0000"
            strokeWidth="4"
            mask="url(#path-1-outside-1_0_1)"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M64.1079 77H58.1989L75.2898 30.4545H81.1079L98.1989 77H92.2898L78.3807 37.8182H78.017L64.1079 77ZM66.2898 58.8182H90.1079V63.8182H66.2898V58.8182Z"
            stroke="#FF0000"
            strokeWidth="4"
            mask="url(#path-1-outside-1_0_1)"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M105.449 77V30.4545H121.176C124.812 30.4545 127.797 31.0758 130.131 32.3182C132.464 33.5454 134.191 35.2348 135.312 37.3864C136.434 39.5379 136.994 41.9848 136.994 44.7273C136.994 47.4697 136.434 49.9015 135.312 52.0227C134.191 54.1439 132.472 55.8106 130.153 57.0227C127.835 58.2197 124.873 58.8182 121.267 58.8182H108.54V53.7273H121.085C123.57 53.7273 125.57 53.3636 127.085 52.6364C128.616 51.9091 129.722 50.8788 130.403 49.5455C131.1 48.197 131.449 46.5909 131.449 44.7273C131.449 42.8636 131.1 41.2348 130.403 39.8409C129.706 38.447 128.593 37.3712 127.062 36.6136C125.532 35.8409 123.509 35.4545 120.994 35.4545H111.085V77H105.449ZM127.358 56.0909L138.812 77H132.267L120.994 56.0909H127.358Z"
            stroke="#FF0000"
            strokeWidth="4"
            mask="url(#path-1-outside-1_0_1)"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M160.75 77H146.386V30.4545H161.386C165.902 30.4545 169.765 31.3864 172.977 33.25C176.189 35.0985 178.652 37.7576 180.364 41.2273C182.076 44.6818 182.932 48.8182 182.932 53.6364C182.932 58.4848 182.068 62.6591 180.341 66.1591C178.614 69.6439 176.098 72.3258 172.795 74.2045C169.492 76.0682 165.477 77 160.75 77ZM152.023 72H160.386C164.235 72 167.424 71.2576 169.955 69.7727C172.485 68.2879 174.371 66.1742 175.614 63.4318C176.856 60.6894 177.477 57.4242 177.477 53.6364C177.477 49.8788 176.864 46.6439 175.636 43.9318C174.409 41.2045 172.576 39.1136 170.136 37.6591C167.697 36.1894 164.659 35.4545 161.023 35.4545H152.023V72Z"
            stroke="#FF0000"
            strokeWidth="4"
            mask="url(#path-1-outside-1_0_1)"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M217.841 42.0909C217.568 39.7879 216.462 38 214.523 36.7273C212.583 35.4545 210.205 34.8182 207.386 34.8182C205.326 34.8182 203.523 35.1515 201.977 35.8182C200.447 36.4848 199.25 37.4015 198.386 38.5682C197.538 39.7348 197.114 41.0606 197.114 42.5454C197.114 43.7879 197.409 44.8561 198 45.75C198.606 46.6288 199.379 47.3636 200.318 47.9545C201.258 48.5303 202.242 49.0076 203.273 49.3864C204.303 49.75 205.25 50.0455 206.114 50.2727L210.841 51.5455C212.053 51.8636 213.402 52.303 214.886 52.8636C216.386 53.4242 217.818 54.1894 219.182 55.1591C220.561 56.1136 221.697 57.3409 222.591 58.8409C223.485 60.3409 223.932 62.1818 223.932 64.3636C223.932 66.8788 223.273 69.1515 221.955 71.1818C220.652 73.2121 218.742 74.8258 216.227 76.0227C213.727 77.2197 210.689 77.8182 207.114 77.8182C203.78 77.8182 200.894 77.2803 198.455 76.2045C196.03 75.1288 194.121 73.6288 192.727 71.7045C191.348 69.7803 190.568 67.5455 190.386 65H196.205C196.356 66.7576 196.947 68.2121 197.977 69.3636C199.023 70.5 200.341 71.3485 201.932 71.9091C203.538 72.4545 205.265 72.7273 207.114 72.7273C209.265 72.7273 211.197 72.3788 212.909 71.6818C214.621 70.9697 215.977 69.9848 216.977 68.7273C217.977 67.4545 218.477 65.9697 218.477 64.2727C218.477 62.7273 218.045 61.4697 217.182 60.5C216.318 59.5303 215.182 58.7424 213.773 58.1364C212.364 57.5303 210.841 57 209.205 56.5455L203.477 54.9091C199.841 53.8636 196.962 52.3712 194.841 50.4318C192.72 48.4924 191.659 45.9545 191.659 42.8182C191.659 40.2121 192.364 37.9394 193.773 36C195.197 34.0454 197.106 32.5303 199.5 31.4545C201.909 30.3636 204.598 29.8182 207.568 29.8182C210.568 29.8182 213.235 30.3561 215.568 31.4318C217.902 32.4924 219.75 33.947 221.114 35.7954C222.492 37.6439 223.22 39.7424 223.295 42.0909H217.841Z"
            stroke="#FF0000"
            strokeWidth="4"
            mask="url(#path-1-outside-1_0_1)"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M1 1H236V106H1V1Z"
            stroke="#FF0707"
            strokeWidth="2"
          />
        </motion.svg>
      </div>
    );
}
 
export default HomepageIcon;