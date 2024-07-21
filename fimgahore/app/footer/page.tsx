import Link from "next/link";

export default function Home() {
  return (
    <div style={{width: '90%'}}>
      <div className="border-t border-solid border-gray"></div>
      <div className="flex flex-row" style={{padding:'40px'}}>
        <div className="basis-1/2 text-2xl " style={{lineHeight:'100px'}}>About</div>
        <div className="basis-1/3 text-sm" >Elevate your designs with our extensive collection of both paid and free UI kits. From sleek interfaces to comprehensive design systems, UI kits are crafted to streamline your workflow and empower creativity. Whether you're designing websites, mobile apps, or desktop software, our UI kits offer a variety of components and elements for whatever you need. Our UI kits provide the building blocks you need to create stunning user experiences, whether it’s minimalist designs to vibrant interfaces. Explore now and bring your designs to life. Templates are paid or free, per template creator choice.</div>
      </div>
      <div className="border-t border-solid border-gray"></div>
      <div className="grid gap-8  sm:grid-cols-2 lg:grid-cols-4" style={{padding:'40px'}}>
        <div className="footer-detaild-grad">
          <p className="footer-detaild-title">Popular searches</p>
          <Link className="footer-detaild" href={'/app/test'}>Resume templates</Link><br></br>
          <Link className="footer-detaild" href={'/app/test'}>Mobile apps</Link><br></br>
          <Link className="footer-detaild" href={'/app/test'}>Presentation templates</Link><br></br>
          <Link className="footer-detaild" href={'/app/test'}>UI kits</Link><br></br>
          <Link className="footer-detaild" href={'/app/test'}>Standup templates</Link><br></br>
        </div>
        <div className="footer-detaild-grad">
          <p className="footer-detaild-title">Most used</p>
          <Link className="footer-detaild" href={'/app/test'}>Resume templates</Link><br></br>
          <Link className="footer-detaild" href={'/app/test'}>Mobile apps</Link><br></br>
          <Link className="footer-detaild" href={'/app/test'}>Presentation templates</Link><br></br>
          <Link className="footer-detaild" href={'/app/test'}>UI kits</Link><br></br>
          <Link className="footer-detaild" href={'/app/test'}>Standup templates</Link><br></br>
        </div>
        <div className="footer-detaild-grad">
          <p className="font-black">Top collections</p>
          <Link className="footer-detaild" href={'/app/test'}>Resume templates</Link><br></br>
          <Link className="footer-detaild" href={'/app/test'}>Mobile apps</Link><br></br>
          <Link className="footer-detaild" href={'/app/test'}>Presentation templates</Link><br></br>
          <Link className="footer-detaild" href={'/app/test'}>UI kits</Link><br></br>
          <Link className="footer-detaild" href={'/app/test'}>Standup templates</Link><br></br>
        </div>
        <div className="footer-detaild-grad">
          <p className="font-black">Top categories</p>
          <Link className="footer-detaild" href={'/app/test'}>Resume templates</Link><br></br>
          <Link className="footer-detaild" href={'/app/test'}>Mobile apps</Link><br></br>
          <Link className="footer-detaild" href={'/app/test'}>Presentation templates</Link><br></br>
          <Link className="footer-detaild" href={'/app/test'}>UI kits</Link><br></br>
          <Link className="footer-detaild" href={'/app/test'}>Standup templates</Link><br></br>
        </div>
      </div>
      <div className="text-2xl" style={{paddingLeft:'40px'}}>Figma</div>
      <div className="text-sm" style={{paddingLeft:'40px',paddingTop:'10px',paddingBottom:'100px'}}>© 2024 年 Figma， Inc.
        •&nbsp;&nbsp;<Link className="footer-detaild" href={'/app/test'}>Site map</Link>&nbsp;&nbsp;
        •&nbsp;&nbsp;<Link className="footer-detaild" href={'/app/test'}>Community guidelines</Link>&nbsp;&nbsp;
        •&nbsp;&nbsp;<Link className="footer-detaild" href={'/app/test'}>Terms of service</Link></div>
    </div>
  );
}

