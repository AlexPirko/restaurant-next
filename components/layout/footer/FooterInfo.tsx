import { footerData } from "./footer.data";

export function FooterInfo() {
  const { address, hours, wifi } = footerData;

  return (
    <div className="space-y-10">
      <section>
        <h3 className="mb-3 font-medium">{address.title}</h3>

        <p>{address.street}</p>
        <p>{address.city}</p>
      </section>

      <section>
        <h3 className="mb-3 font-medium">{hours.title}</h3>

        <div className="space-y-1">
          {hours.items.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section>
        <h3 className="mb-3 font-medium">{wifi.title}</h3>

        <p>SSID: {wifi.ssid}</p>
        <p>Password: {wifi.password}</p>
      </section>
    </div>
  );
}
