import Link from "next/link";
import { HomeIcon } from "@/public/icons";
import { Text } from "./Text";

const MOCK_PATH = [
  { name: "Bradcrumbs", path: "/" },
  { name: "Bradcrumbs", path: "/" },
];

export function Breadcrumbs() {
  return (
    <div className="grid grid-flow-col justify-start gap-2 w-full max-w-[1128px] items-center">
      <Link href="/">
        <HomeIcon />
      </Link>
      {MOCK_PATH.map(({ name, path }, index) => {
        const isLast = index === MOCK_PATH.length - 1;
        return (
          <Link
            href={path}
            key={index}
            className="grid grid-flow-col gap-1 items-center cursor-pointer"
          >
            <Text className="w-[18px] text-center aspect-square">/</Text>
            <Text className={isLast ? "text-121212" : ""}>{name}</Text>
          </Link>
        );
      })}
    </div>
  );
}
