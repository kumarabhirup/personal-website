import { META } from './metadata'

export const TECH = {
  title: 'Technologies I work with',
  data: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'Next.js',
    'GraphQL',
    'TypeScript',
    'Apollo GraphQL',
    'Node.js',
    'Docker',
    'Electron',
    'DigitalOcean',
    'Redux',
    'MongoDB',
    {
      title: 'Vercel',
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Vercel</title><path d="M24 22.525H0l12-21.05 12 21.05z"/></svg>`,
    },
    {
      title: 'Amazon S3',
      hex: '#569A31',
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Amazon S3</title><path d="M20.913 13.147l.12-.895c.947.576 1.258.922 1.354 1.071-.16.031-.562.046-1.474-.176zm-2.174 7.988a.547.547 0 0 0-.005.073c0 .084-.207.405-1.124.768a10.28 10.28 0 0 1-1.438.432c-1.405.325-3.128.504-4.853.504-4.612 0-7.412-1.184-7.412-1.704a.547.547 0 0 0-.005-.073L1.81 5.602c.135.078.28.154.432.227.042.02.086.038.128.057.134.062.272.122.417.18l.179.069c.154.058.314.114.478.168.043.013.084.029.13.043.207.065.423.127.646.187l.176.044c.175.044.353.087.534.127a23.414 23.414 0 0 0 .843.17l.121.023c.252.045.508.085.768.122.071.011.144.02.216.03.2.027.4.053.604.077l.24.027c.245.026.49.05.74.07l.081.009c.275.022.552.04.83.056l.233.012c.21.01.422.018.633.025a33.088 33.088 0 0 0 2.795-.026l.232-.011c.278-.016.555-.034.83-.056l.08-.008c.25-.02.497-.045.742-.072l.238-.026c.205-.024.408-.05.609-.077.07-.01.141-.019.211-.03.261-.037.519-.078.772-.122l.111-.02c.215-.04.427-.082.634-.125l.212-.047c.186-.041.368-.085.546-.13l.166-.042c.225-.06.444-.122.654-.189.04-.012.077-.026.115-.038a10.6 10.6 0 0 0 .493-.173c.058-.021.114-.044.17-.066.15-.06.293-.12.43-.185.038-.017.079-.034.116-.052.153-.073.3-.15.436-.228l-.976 7.245c-2.488-.78-5.805-2.292-7.311-3a1.09 1.09 0 0 0-1.088-1.085c-.6 0-1.088.489-1.088 1.088 0 .6.488 1.089 1.088 1.089.196 0 .378-.056.537-.148 1.72.812 5.144 2.367 7.715 3.15zm-7.42-20.047c5.677 0 9.676 1.759 9.75 2.736l-.014.113c-.01.033-.031.067-.048.101-.015.028-.026.057-.047.087-.024.033-.058.068-.09.102-.028.03-.051.06-.084.09-.038.035-.087.07-.133.105-.04.03-.074.06-.119.091-.053.036-.116.071-.177.107-.05.03-.095.06-.15.09-.068.036-.147.073-.222.11-.059.028-.114.057-.177.085-.084.038-.177.074-.268.111-.068.027-.13.054-.203.082-.097.036-.205.072-.31.107-.075.026-.148.053-.228.079-.111.035-.233.069-.35.103-.085.024-.165.05-.253.073-.124.034-.258.065-.389.098-.093.022-.181.046-.278.068-.139.032-.287.061-.433.091-.098.02-.191.041-.293.06-.155.03-.32.057-.482.084-.1.018-.198.036-.302.052-.166.026-.342.048-.515.072-.11.014-.213.03-.325.044-.181.023-.372.041-.56.06-.11.012-.218.025-.332.036-.188.016-.386.029-.58.043-.122.009-.24.02-.364.028-.207.012-.422.02-.635.028-.12.005-.234.012-.354.016a35.605 35.605 0 0 1-2.069 0c-.12-.004-.234-.011-.352-.016-.214-.008-.43-.016-.637-.028-.122-.008-.238-.02-.36-.027-.195-.015-.394-.028-.584-.044-.11-.01-.215-.024-.324-.035-.19-.02-.384-.038-.568-.06l-.315-.044c-.176-.024-.355-.046-.525-.073-.1-.015-.192-.033-.29-.05-.167-.028-.335-.055-.494-.086-.096-.018-.183-.038-.276-.056-.151-.032-.305-.062-.45-.095-.09-.02-.173-.043-.26-.064-.138-.034-.277-.067-.407-.102-.082-.022-.157-.046-.235-.069a11.75 11.75 0 0 1-.368-.108c-.075-.024-.141-.049-.213-.073-.11-.037-.223-.075-.325-.113-.067-.025-.125-.051-.188-.077-.096-.038-.195-.076-.282-.115-.06-.027-.11-.054-.166-.08-.08-.039-.162-.077-.233-.116-.052-.028-.094-.055-.142-.084-.063-.038-.13-.075-.185-.113-.043-.029-.075-.058-.113-.086-.048-.037-.098-.073-.139-.11-.032-.029-.054-.057-.08-.087-.033-.035-.069-.07-.093-.104-.02-.03-.031-.058-.046-.086-.018-.035-.039-.068-.049-.102l-.015-.113c.076-.977 4.074-2.736 9.748-2.736zm12.182 12.124c-.118-.628-.84-1.291-2.31-2.128l.963-7.16a.531.531 0 0 0 .005-.073C22.16 1.581 16.447 0 11.32 0 6.194 0 .482 1.581.482 3.851a.58.58 0 0 0 .005.072L2.819 21.25c.071 2.002 5.236 2.75 8.5 2.75 1.805 0 3.615-.188 5.098-.531.598-.138 1.133-.3 1.592-.48 1.18-.467 1.789-1.053 1.813-1.739l.945-7.018c.557.131 1.016.197 1.389.197.54 0 .902-.137 1.134-.413a.956.956 0 0 0 .21-.804Z"/></svg>`,
    },
    {
      title: 'AWS EC2',
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Amazon AWS</title><path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z"/></svg>`,
    },
    {
      title: 'Solidity',
      hex: '#3C3C3D',
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Ethereum</title><path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"/></svg>`,
    },
    {
      title: 'NPM',
      hex: '#CB3837',
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>npm</title><path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"/></svg>`,
    },
    {
      title: 'PayPal',
      hex: '#00457C',
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>PayPal</title><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"/></svg>`,
    },
    {
      title: 'Stripe',
      hex: '#008CDD',
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Stripe</title><path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"/></svg>`,
    },
    {
      title: 'PostgreSQL',
      hex: '#4169E1',
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>PostgreSQL</title><path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"/></svg>`,
    },
    {
      title: 'Redis',
      hex: '#DC382D',
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Redis</title><path d="M10.5 2.661l.54.997-1.797.644 2.409.218.748 1.246.467-1.121 2.077-.208-1.61-.613.426-1.017-1.578.519zm6.905 2.077L13.76 6.182l3.292 1.298.353-.146 3.293-1.298zm-10.51.312a2.97 1.153 0 0 0-2.97 1.152 2.97 1.153 0 0 0 2.97 1.153 2.97 1.153 0 0 0 2.97-1.153 2.97 1.153 0 0 0-2.97-1.152zM24 6.805s-8.983 4.278-10.395 4.953c-1.226.561-1.901.561-3.261.094C8.318 11.022 0 7.241 0 7.241v1.038c0 .24.332.499.966.8 1.277.613 8.34 3.677 9.45 4.206 1.112.53 1.9.54 3.313-.197 1.412-.738 8.049-3.905 9.326-4.57.654-.342.945-.602.945-.84zm-10.042.602L8.39 8.26l3.884 1.61zM24 10.637s-8.983 4.279-10.395 4.954c-1.226.56-1.901.56-3.261.093C8.318 14.854 0 11.074 0 11.074v1.038c0 .238.332.498.966.8 1.277.612 8.34 3.676 9.45 4.205 1.112.53 1.9.54 3.313-.197 1.412-.737 8.049-3.905 9.326-4.57.654-.332.945-.602.945-.84zm0 3.842l-10.395 4.954c-1.226.56-1.901.56-3.261.094C8.318 18.696 0 14.916 0 14.916v1.038c0 .239.332.499.966.8 1.277.613 8.34 3.676 9.45 4.206 1.112.53 1.9.54 3.313-.198 1.412-.737 8.049-3.904 9.326-4.569.654-.343.945-.613.945-.841z"/></svg>`,
    },
    {
      title: 'Sentry',
      hex: '#362D59',
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Sentry</title><path d="M13.91 2.505c-.873-1.448-2.972-1.448-3.844 0L6.904 7.92a15.478 15.478 0 0 1 8.53 12.811h-2.221A13.301 13.301 0 0 0 5.784 9.814l-2.926 5.06a7.65 7.65 0 0 1 4.435 5.848H2.194a.365.365 0 0 1-.298-.534l1.413-2.402a5.16 5.16 0 0 0-1.614-.913L.296 19.275a2.182 2.182 0 0 0 .812 2.999 2.24 2.24 0 0 0 1.086.288h6.983a9.322 9.322 0 0 0-3.845-8.318l1.11-1.922a11.47 11.47 0 0 1 4.95 10.24h5.915a17.242 17.242 0 0 0-7.885-15.28l2.244-3.845a.37.37 0 0 1 .504-.13c.255.14 9.75 16.708 9.928 16.9a.365.365 0 0 1-.327.543h-2.287c.029.612.029 1.223 0 1.831h2.297a2.206 2.206 0 0 0 1.922-3.31z"/></svg>`,
    },
  ],
}

export const SOCIAL = {
  title: 'Available here',
  data: [
    { platform: 'Twitter', link: `https://twitter.com/${META.social.twitter}` },
    {
      platform: 'LinkedIn',
      link: `https://linkedin.com/in/${META.social.linkedin}`,
    },
    {
      platform: 'GitHub',
      link: `https://github.com/${META.social.github}`,
    },
    {
      platform: 'YouTube',
      link: `https://www.youtube.com/${META.social.youtube}`,
    },
    {
      platform: 'Twitch',
      link: `/twitch`,
    },
    {
      platform: 'Instagram',
      link: `https://www.instagram.com/${META.social.instagram}`,
    },
    // {
    //   platform: 'Facebook',
    //   link: `https://www.facebook.com/${META.social.facebook}`,
    // },
  ],
}

export const PROJECTS = {
  title: 'Experience',
  data: [
    {
      image:
        'https://pbs.twimg.com/profile_images/1658696039195627522/LiQoMntF_400x400.jpg',
      name: 'Airchat',
      link: 'https://getairchat.com',
      description: (
        <>
          <span style={{ filter: 'opacity(0.5)' }}>
            <strong>Software Engineer</strong>, August 2023 - Feb 2024
          </span>
          <br /> Re-established and improved the Airchat Web Client, better Link
          Previews, helped the app get 2k+ installs via CTA and its accurate
          tracking, worked with the Java GRPC Backend, owned certain parts of
          the Airchat iOS app.
        </>
      ),
    },
    {
      image: 'https://www.deva.me/favicon_384.png',
      name: 'Deva.me',
      link: 'https://deva.me/creators',
      description: (
        <>
          <span style={{ filter: 'opacity(0.5)' }}>
            <strong>Founding Engineer</strong>, February - August 2023
          </span>
          <br /> We aim to provide everyone a second voice, and create a massive
          supply of automated representative intellect that shall transcend into
          new learning experiences for the masses.
        </>
      ),
    },
    // {
    //   image:
    //     'https://media.licdn.com/dms/image/C4E0BAQEHs1C2gRRukA/company-logo_200_200/0/1620129594556?e=2147483647&v=beta&t=OJNnxV2Tz6cwTXmAk_Tm7P-8v7-MlLPsCsd5ugCoxFg',
    //   name: 'Stealth Startup',
    //   // link: 'https://app.serendipity.lol',
    //   description: (
    //     <>
    //       <span style={{ filter: 'opacity(0.5)' }}>
    //         <strong>Consultant & Tech Lead</strong>, March 2023 - Present
    //       </span>
    //       <br /> Working (in & from India) with a Web3 + AI startup, with a
    //       globally operated remote team.
    //     </>
    //   ),
    // },
    {
      image: 'https://i.ibb.co/Z8gmths/serendipity.jpg',
      // width: 100,
      name: 'Serendipity',
      // link: '#', // 'https://app.serendipity.lol',
      description: (
        <>
          <span style={{ filter: 'opacity(0.5)' }}>
            <strong>Software Engineer</strong>, August 2022 - Februrary 2023
          </span>
          <br /> Serendipity approaches Note Taking in a whole new way, by
          focusing on People, not just Notes. It is a note-taking app that helps
          you remember the people you meet, and the things you learn from them,
          and creates you a beautiful looking network graph.
          <br />
          <br />
          <div
            style={{
              position: 'relative',
              paddingBottom: '64.5933014354067%',
              height: 0,
            }}
          >
            <iframe
              title="Serendipity Demo"
              src="https://www.loom.com/embed/834bd1d633be40689e1b938cbd8bfbae"
              frameBorder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: 15,
              }}
            />
          </div>
          <br />
          Pair coded with my teammate, and shipped the MVP in just 10 days
          (Next.js + Node.js). It was like a hackathon on steroids. Worked on
          the entire stack: the frontend, the backend, and all the business
          logic. Shipped a Mac Desktop App for Serendipity power users.
          <br /> <br />
          Worked hardcore, extensively on perfecting the D3.js Advanced Network
          Graph mechanics. Shipped insanely complex CRDT based collaborative
          editing using a wide range of technologies.
        </>
      ),
    },
    {
      image:
        'https://pbs.twimg.com/profile_images/1460721641084768260/nbMf9_r1_400x400.jpg',
      // width: 100,
      name: 'Monument Labs, Inc.',
      // link: 'https://monument.app',
      description: (
        <>
          <span style={{ filter: 'opacity(0.5)' }}>
            <strong>Product Manager</strong> &{' '}
            <strong>Web 3.0 Developer</strong>, December 2021 - August 2022
          </span>
          <br /> Monument.app is a Blockchain Start-up, which helps create
          collections of significant moments within a creator's journey. Each
          moment is represented by a collectible NFT that can be bought and
          owned by a creator's closest supporters. Creators share their stories
          through minting new moments, financially enabling them to pursue their
          dreams. <br /> <br /> As a Full-stack Web 3.0 Developer, I helped
          create all the Monument Smart Contracts currently deployed on the
          Ethereum Mainnet. Wrote and thoroughly tested the Monument ERC721 NFT
          Contract (got it audited back and forth by professionals), and the
          Monument Marketplace Contract that supports buying & selling of NFTs
          and manages its auctions in a secure fashion. <br /> <br /> As a
          Product Manager, I managed a team of 5 developers working on the
          Frontend, Backend, Web3 & the Monument iOS App. I brought order in
          chaotic times, and helped the company ship its MVP in a month using
          Scrum & Agile methodologies.
        </>
      ),
    },
    {
      image: 'https://i.ibb.co/F0hmv9N/Beam-Community.jpg',
      // width: 100,
      name: 'Beam Community, Inc.',
      link: 'https://itsbeam.com',
      description: (
        <>
          <span style={{ filter: 'opacity(0.5)' }}>
            <strong>Founder, Former CEO</strong>, March 2020 - July 2022
          </span>
          <br /> <strong>Recent Update:</strong> I found this company when in
          10th grade, and it has recently got acquired, sold it in July 2022. I
          no more run this company. <br /> <br /> It is the Substack for SMS. It
          is a SaaS service that enables companies and creators to connect to
          their fans via text, and also enables them to earn money via
          subscriptions. <br /> <br /> Built entire product from start to
          finish, used tools like React, Node.js, GraphQL, MongoDB, Websocket,
          Twilio, AWS EC2, AWS SES, Git, Cloudinary on production. <br /> <br />{' '}
          As a founder, not just managed technical aspects of the company, but
          also Design UI/UX, Growth, and Product Management.
        </>
      ),
    },
    {
      image: 'https://thegenerativepress.com/favicon.ico',
      // width: 100,
      name: 'The Generative Press',
      link: 'https://thegenerativepress.com',
      description: (
        <>
          <span style={{ filter: 'opacity(0.5)' }}>
            <strong>Side-project</strong>, January 2023 - Present
          </span>
          <br /> The Generative Press surfs on Twitter and popular news sites,
          also reads latest tweets by verified citizen journalists to learn
          about latest happenings live, and then, our very own home-grown AI
          personalities write the news after gathering all the context. It's
          automated from beginning to the end. No editorial team, no human
          intervention, only news. <br /> <br /> Made this with my colleague{' '}
          <a
            href="https://twitter.com/dkposts"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daniel
          </a>
          at Serendipity in a weekend.
        </>
      ),
    },
    {
      image: 'https://judiciaryapp.vercel.app/favicon.ico',
      // width: 100,
      name: 'The Judiciary Protocol (judiciary.app)',
      link: 'https://judiciaryapp.vercel.app',
      description: (
        <>
          <span style={{ filter: 'opacity(0.5)' }}>
            <strong>DAO Attorney</strong> & <strong>Protocol Architect</strong>,
            December 2022 - Present
          </span>
          <br /> The on-chain contract creation & signing protocol for
          businesses and individuals, with in-built escrow functionalities where
          the participants can choose their judge for the escrow wallet. <br />
          <br /> My team and I created this during the Korea Blockchain Week
          2022 EthSeoul & Filecoin-Moralis hackathon (won $8k in grants). Teamed
          up with a consultant from Bankless Consulting to turn this project
          into something big. <br /> <br /> Worked on the protocol & led the
          team entirely from idea to execution — Solidity, React, Next.js,
          Wagmi, Ethers, Chakra UI, on all fronts.
        </>
      ),
    },
    {
      image:
        'https://ph-files.imgix.net/32a6ac11-e7b0-4c3f-82fc-bc92c38dba34?auto=format',
      name: 'bulk-mail-cli',
      link: 'https://bulkmail.now.sh',
      description: (
        <>
          <span style={{ filter: 'opacity(0.5)' }}>
            <strong>Maintainer</strong>, December 2018 - March 2020
          </span>
          <br /> A command line interface (cli) application that sends automated
          and dynamic emails to your email list. It recieved thousands of
          installs on NPM, and a good response on{' '}
          <a
            href="https://github.com/kumarabhirup/bulk-mail-cli#readme"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </>
      ),
    },
    // {
    //   image: 'https://i.ibb.co/dPRzYZv/pkgreview-2.jpg',
    //   name: 'pkgreview.dev',
    //   link: 'https://pkgreview.vercel.app',
    //   description: (
    //     <>
    //       <span style={{ filter: 'opacity(0.5)' }}>
    //         <strong>Side-project</strong>, February 2020 - June 2020
    //       </span>
    //       <br /> Shipped ALL of it in just SEVEN DAYS. A lot of people find it
    //       very difficult to decide what NPM Package to use. pkgreview.dev helps
    //       developers in the JavaScript Community review and analyze each module
    //       before they start using it. <br /> <br /> I no more maintain this
    //       project,{' '}
    //       <strong>pkgreview.dev is now deprecated and abandoned.</strong>
    //     </>
    //   ),
    // },
    {
      image: 'https://i.ibb.co/fd2rF97/favicon.jpg',
      name: 'JoinMyCall',
      link: 'https://joinmycall.now.sh',
      description: (
        <>
          <span style={{ filter: 'opacity(0.5)' }}>
            <strong>Side-project</strong>, June 2019 - August 2019
          </span>
          <br /> This app makes your colleagues take a connection/camera/mic
          test before joining a call. Hosts can create infinite JoinMyCall links
          to invite guests in meeting. Guests can either skip or do the
          connection test.
        </>
      ),
    },
  ],
}

export const SKILLS = [
  'Abhirup',
  'codes',
  'debugs',
  'learns',
  'helps',
  'jokes',
  'speaks',
  'tweets',
  'lives',
  'chats',
]
