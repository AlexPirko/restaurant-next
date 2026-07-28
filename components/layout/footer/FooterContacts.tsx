import Link from "next/link";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

import { footerData } from "./footer.data";

export function FooterContacts() {
  const { contacts, socials } = footerData;

  return (
    <div className="space-y-10">
      <section>
        <h3 className="mb-4 font-medium">Social</h3>

        <div className="flex gap-4">
          <Link href={socials[0].href}>
            <FaInstagram size={18} />
          </Link>

          <Link href={socials[1].href}>
            <FaFacebookF size={18} />
          </Link>

          <Link href={socials[2].href}>
            <FaXTwitter size={18} />
          </Link>
        </div>
      </section>

      <section>
        <h3 className="mb-4 font-medium">Contact</h3>

        <div className="space-y-3">
          {contacts.phones.map((phone) => (
            <div key={phone.number}>
              <p className="text-white/50">{phone.label}</p>

              <Link href={`tel:${phone.number}`}>{phone.number}</Link>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="mb-3 font-medium">E-mail</h3>

        <Link href={`mailto:${contacts.email}`}>{contacts.email}</Link>
      </section>
    </div>
  );
}
