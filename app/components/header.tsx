import Image from "next/image";

export default function Header() {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <a
          href="https://www.llamaindex.ai/"
          className="flex items-center justify-center font-nunito text-lg font-bold gap-2"
        >
          <span>A Product Expert built for RF HFCs. Warning: Answers may contain inaccuracies. Consult source materials for verifiction. Can answer questions for the following product guides: Aireloom product guide, Reverie Product Guide, Beautyrest and Serta Product Guide, Style Category & Selling Tips March 2024, HM Richards Product Guide, Tempur-Pedic Sealy Stearns & Foster Product Guide </span>
        </a>
    </div>
  );
}
