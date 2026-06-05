import { SiChessdotcom, SiLichess } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-8">
      <div className="flex justify-center items-center gap-8">
        <a
          href="https://www.chess.com/club/tokyo-check-mates"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors duration-200"
          title="Chess.com Profile"
        >
          <SiChessdotcom size={32} />
        </a>
        <a
          href="https://lichess.org/team/tokyo-check-mates"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors duration-200"
          title="Lichess Profile"
        >
          <SiLichess size={32} />
        </a>
      </div>
    </footer>
  );
}
