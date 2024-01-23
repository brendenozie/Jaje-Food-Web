"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Avatar } from "@nextui-org/react";
import useSWR from "swr";
import axios from "axios";
import { useUserStore } from "@/store/UserStore";
export default function Buttons() {
  const session = useSession();
  const { status } = session;
  const fetcher = async () => {
    const response = await axios.get("/api/profile");
    return response.data;
  };

  // Get categories data from server with SWR
  const { data: user, error, isLoading } = useSWR("user", fetcher);
  const setUser = useUserStore((state) => state.setUser);
  setUser(user);
  const userImage = user?.image;

  let userName = user?.name || user?.email;
  if (userName?.includes(" ")) {
    userName = userName.split(" ")[0];
  }
  return (
    <>
      {status === "authenticated" ? (
        <div>
          <div className="flex gap-3 items-center">
            <Link
              href={"/profile"}
              className="flex flex-row text-xl font-bold text-white dark:text-primary items-end"
            >
              Hello,

                <Avatar
                  color={"primary"}
                  isBordered
                  src={userImage ? userImage : "/profile.png"}
                />

            </Link>
            <Button
              as={Link}
              color="secondary"
              href="/register"
              variant="flat"
              onClick={() => signOut()}
            >
              Log Out
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex gap-3">
          <Button as={Link} className="text-white dark:secondary" href="/register" variant="flat">
            Sign Up
          </Button>
          <Button as={Link} className="text-white dark:primary" href="/login" variant="flat">
            Sign In
          </Button>
        </div>
      )}
    </>
  );
}
