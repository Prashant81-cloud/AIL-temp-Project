import { Marquee } from "@/components/ui/marquee";

export default function Example() {
  return (
    <div className="px-15">
<div>
      <Marquee  className="marquee-mask  [--duration:10s]">
      <span className="text-4xl font-bold">Brands Name</span>
      <span className="text-4xl font-bold">Brands Name</span>
      <span className="text-4xl font-bold">Brands Name</span>
    </Marquee>
</div>
<div>
      <Marquee reverse  className="marquee-mask  [--duration:12s]">
      <span className="text-4xl font-bold">Brands Name</span>
      <span className="text-4xl font-bold">Brands Name</span>
      <span className="text-4xl font-bold">Brands Name</span>
    </Marquee>
</div>
</div>
  );
}
