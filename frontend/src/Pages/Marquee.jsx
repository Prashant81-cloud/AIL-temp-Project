import { Marquee } from "@/Components/ui/Marquee";


const Logo1 = 'https://ail-media.b-cdn.net/1.png';
const Logo2 = 'https://ail-media.b-cdn.net/2.png';
const Logo3 = 'https://ail-media.b-cdn.net/3.png';
const Logo5 = 'https://ail-media.b-cdn.net/5.png';
const Logo7 = 'https://ail-media.b-cdn.net/7.png';
const Logo8 = 'https://ail-media.b-cdn.net/8.png';
const Logo9 = 'https://ail-media.b-cdn.net/9.png';
const Logo10 = 'https://ail-media.b-cdn.net/10.png';
const Logo12 = 'https://ail-media.b-cdn.net/12.png';
const Logo13 = 'https://ail-media.b-cdn.net/13.png';
const Logo14 = 'https://ail-media.b-cdn.net/14.png';
const Logo16 = 'https://ail-media.b-cdn.net/16.png';
const Logo17 = 'https://ail-media.b-cdn.net/17.png';
const Logo18 = 'https://ail-media.b-cdn.net/18.png';
const Logo19 = 'https://ail-media.b-cdn.net/19.png';
const Logo20 = 'https://ail-media.b-cdn.net/20.png';
const Logo21 = 'https://ail-media.b-cdn.net/21.png';
const Logo23 = 'https://ail-media.b-cdn.net/23.png';
const Logo24 = 'https://ail-media.b-cdn.net/24.png';
const Logo25 = 'https://ail-media.b-cdn.net/25.png';


export default function Example() {
  return (
    <div className="">
<div className="px-15">
      <Marquee  className="marquee-mask  [--duration:28s] flex [--gap:0rem]">
<img className="sm:h-40 h-25 " src={Logo1} alt="Logo 1" />
<img className="sm:h-40 h-25 " src={Logo2} alt="Logo 2" />
<img className="sm:h-40 h-25 " src={Logo3} alt="Logo 3" />
<img className="sm:h-40 h-25 " src={Logo5} alt="Logo 5" />
{/* <img className="sm:h-40 h-25" src={Logo6} alt="Logo 6" /> */}
<img className="sm:h-40 h-25 " src={Logo7} alt="Logo 7" />
<img className="sm:h-40 h-25 " src={Logo8} alt="Logo 8" />
<img className="sm:h-40 h-25 " src={Logo9} alt="Logo 9" />
<img className="sm:h-40 h-25 " src={Logo10} alt="Logo 10" />
<img className="sm:h-40 h-25 " src={Logo12} alt="Logo 12" />


    </Marquee>
</div>
<div className="px-15">
      <Marquee reverse  className="marquee-mask  [--duration:28s] flex [--gap:0rem]">
<img className="sm:h-40 h-25" src={Logo14} alt="Logo 14" />
<img className="sm:h-40 h-25" src={Logo16} alt="Logo 16" />
<img className="sm:h-40 h-25" src={Logo17} alt="Logo 17" />
<img className="sm:h-40 h-25" src={Logo18} alt="Logo 18" />
<img className="sm:h-40 h-25" src={Logo19} alt="Logo 19" />
<img className="sm:h-40 h-25" src={Logo20} alt="Logo 20" />
<img className="sm:h-40 h-25" src={Logo21} alt="Logo 21" />
<img className="sm:h-40 h-25" src={Logo23} alt="Logo 23" />
<img className="sm:h-40 h-25" src={Logo24} alt="Logo 24" />
<img className="sm:h-40 h-25" src={Logo25} alt="Logo 25" />
<img className="sm:h-40 h-25 " src={Logo13} alt="Logo 13" />
    </Marquee>
</div>
</div>
  );
}
