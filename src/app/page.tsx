import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-between">
      <section className="w-2/4">
        <h1 className="text-5xl font-medium">Welcome to Verify!</h1>
        <p className="text-lg mt-3">
          Get a certificate of one of your diplomas easily.
        </p>
        <p className="text-lg mt-3">
          Ardeo, mihi credite, Patres conscripti (id quod vosmet de me
          existimatis et facitis ipsi) incredibili quodam amore patriae, qui me
          amor et subvenire olim impendentibus periculis maximis cum dimicatione
          capitis, et rursum, cum omnia tela undique esse intenta in patriam
          viderem, subire coegit atque excipere unum pro universis. Hic me meus
          in rem publicam animus pristinus ac perennis cum C. Caesare reducit,
          reconciliat, restituit in gratiam.
        </p>
      </section>
      <div className="w-2/4">
        <Image
          src="/certificate.svg"
          height={0}
          width={0}
          sizes="100vw"
          style={{width: "100%", height: "60vh"}}
          alt="Certificate"
        />
      </div>
    </div>
  );
}
