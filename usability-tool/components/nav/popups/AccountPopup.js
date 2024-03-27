import Link from "next/link";
import { useRouter } from "next/navigation";
import { logOut } from "@/lib/firebase/auth";
import styles from "@/styles/nav.module.scss";
import { getAuthContext } from "@/app/(main)/components/AuthContextProvider";

export default function Accountpopup() {
  const router = useRouter();
  const { user } = getAuthContext();

  async function handleSignout() {
    try {
      await logOut();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={`dropdown`}>
      <button
        className={`${styles.dropdownBtn}`}
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        aria-label="Open the account dropdown menu"
      >
        <i class={`bi bi-person-circle fs-2 ${styles.dropDownImg}`}></i>
      </button>
      <ul className={`dropdown-menu dropdown-menu-end ${styles.dropDownMenu}`}>
        <li>
          <span className={`dropdown-item-text ${styles.dropDownItemText}`}>
            Signed in: <br /> {user?.displayName || user?.email}
          </span>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link className={`dropdown-item`} href="/statistics">
            Statistics
          </Link>
        </li>
        <li>
          <button className={`dropdown-item`} onClick={() => handleSignout()}>
            Sign out
          </button>
        </li>
      </ul>
    </div>
  );
}
