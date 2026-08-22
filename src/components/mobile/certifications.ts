import pythonCert from '../../assets/mobile/Python_tutedude.pdf';
import fullStackCert from '../../assets/mobile/Full_Stack.pdf';
import powerBiCert from '../../assets/mobile/PowerBi_Course.pdf';
import oracleAutonomousCert from '../../assets/mobile/Oracle_Autonomous_Database_Cloud.pdf';
import oracleCloudCert from '../../assets/mobile/Oracle_Cloud_Database_Services.pdf';
import ethicalHackingCert from '../../assets/mobile/Ethical_Hacking.pdf';

export interface CertificationItem {
  name: string;
  date: string;
  issuer: string;
  url: string;
}

export const certifications: CertificationItem[] = [
  {
    name: "Python Programming — Tutedude",
    date: "June\u00a02026",
    issuer: "Tutedude",
    url: pythonCert,
  },
  {
    name: "Full Stack Web Development — Udemy",
    date: "June\u00a02026",
    issuer: "Udemy",
    url: fullStackCert,
  },
  {
    name: "Power BI — Microsoft Elevate",
    date: "Dec 2025",
    issuer: "Microsoft",
    url: powerBiCert,
  },
  {
    name: "Autonomous Database Cloud — Oracle",
    date: "Nov 2025",
    issuer: "Oracle University",
    url: oracleAutonomousCert,
  },
  {
    name: "Cloud Database Service — Oracle",
    date: "Oct 2025",
    issuer: "Oracle University",
    url: oracleCloudCert,
  },
  {
    name: "Ethical Hacking — Udemy",
    date: "Mar 2023",
    issuer: "Udemy",
    url: ethicalHackingCert,
  },
];
