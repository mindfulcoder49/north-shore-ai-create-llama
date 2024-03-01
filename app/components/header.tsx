import Image from "next/image";

export default function Header() {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <a
          href="https://www.llamaindex.ai/"
          className="flex items-center justify-center font-nunito text-lg font-bold gap-2"
        >
          <span>A customGPT expert on the New York Times lawsuit, and Elon Musk lawsuit against OpenAI and Microsoft, Built for North Shore AI Developers using create-llama</span>
        </a>
    </div>
  );
}
