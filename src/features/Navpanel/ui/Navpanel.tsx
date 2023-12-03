import { navpanelConfig } from "@/entity/navpanel/config";
import Link from "next/link";

type NavpanelProps = {};

export default function Navpanel(props: NavpanelProps) {
  const {} = props;
  // hover:decoration-slate-50
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="md:px-6 prose prose-xl mx-auto  flex-col sm:flex-row">
        <div className="flex justify-between h-10">
          <div className="">My Logo</div>
          <div className="">Login/Logout</div>
        </div>
        <div className="flex justify-center align-center gap-10">
          {navpanelConfig.map((item) => (
            <div
              key={item.name}
              className="hover:bg-gradient-to-r from-indigo-500 rounded-lg cursor-pointer"
            >
              <h3>{item.name}</h3>
              <Link href={item.route} />
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
