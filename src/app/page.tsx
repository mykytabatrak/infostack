import { RedirectType, permanentRedirect } from "next/navigation";

export default function Root() {
  permanentRedirect("/home", RedirectType.replace);
}
