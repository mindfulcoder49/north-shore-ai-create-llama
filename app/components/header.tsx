import Image from "next/image";

export default function Header() {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <a
          href="https://www.llamaindex.ai/"
          className="flex items-center justify-center font-nunito text-lg font-bold gap-2"
        >
          <span>A Product Expert built for RF HFCs. Warning: Answers may contain inaccuracies. Consult source materials for verifiction. For Internal Use Only. Can answer questions for the following product guides: 'Aireloom product guide.txt', 'Reverie Product Guide.txt','Beautyrest and Serta Product Guide.txt', 'Style Category & Selling Tips March 2024.txt', 'HM Richards Product Guide.txt', 'Tempur-Pedic Sealy Stearns & Foster Product Guide.txt'</span>
        </a>
    </div>
  );
}
