import "./Services.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import image1 from "@/image/image1.jpg";
import image2 from "@/image/image2.jpg";
import image3 from "@/image/image3.jpg";

export default function Services() {
  return (
    <>
      <div className="services-1">
        <h1>Our Services</h1>
        <p>
          More than solutions - delivering reliability, innovation, and
          efficiency.
        </p>
        <div className="services-2">
          <div className="services-3">
            <Card>
              <img
                src={image1}
                className="w-full h-auto max-h-60 object-cover rounded-t-xl"
              />

              <CardHeader>
                <CardTitle>Commercial services</CardTitle>
                <CardDescription>Business</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Empowering businesses with high-quality electrical solutions.
                  Our expert services ensure safety, efficiency, and reliability
                  for all types of commercial spaces.
                </p>
              </CardContent>
              <CardFooter>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <button className="services-button">Read More</button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Commercial Services</AlertDialogTitle>
                      <AlertDialogDescription>
                        Empowering businesses with high-quality electrical
                        solutions designed for safety, efficiency, and
                        reliability. We provide expert services that support
                        seamless operations, ensuring optimal energy use and
                        compliance in commercial environments.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <div className="mt-0">
                      <p
                        style={{ color: "orangered" }}
                        className="font-semibold text-white mb-2"
                      >
                        Our Services Include:
                      </p>
                      <ul className="list-disc ml-5 text-white text-sm">
                        <li className="mb-1">Maintenance and fault finding</li>
                        <li className="mb-1">
                          Testing Inspection and Electrical Reports
                        </li>
                        <li className="mb-1">Additional Points</li>
                        <li className="mb-1">Emergency lighting</li>
                        <li className="mb-1">Fuse Boards changes</li>
                        <li className="mb-1">Commercial Lamp Replacements</li>
                        <li className="mb-1">New Installations</li>
                        <li className="mb-1">RCD Faults</li>
                        <li className="mb-1">Re-wires</li>
                      </ul>
                      <p className="mt-4 text-sm text-white">
                        ⚡ Reliable. Efficient. Business-Ready. Elevate your
                        commercial space with expert electrical solutions.
                      </p>
                    </div>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Close</AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardFooter>
            </Card>
          </div>

          <div className="services-3">
            <Card>
              <img
                src={image2}
                className="w-full h-auto max-h-60 object-cover rounded-t-xl"
              />

              <CardHeader>
                <CardTitle>Industrial services</CardTitle>
                <CardDescription>Enterprise</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Comprehensive electrical solutions for industries. We
                  specialize in high-performance systems that ensure safety,
                  efficiency, and uninterrupted operations.
                </p>
              </CardContent>
              <CardFooter>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <button className="services-button">Read More</button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Industrial Services</AlertDialogTitle>
                      <AlertDialogDescription>
                        Powering industries with reliable, high-performance
                        electrical solutions. We specialize in designing,
                        installing, and maintaining electrical systems that
                        enhance productivity, safety, and efficiency in
                        industrial environments. Our expert team ensures
                        seamless operation, minimizing downtime and maximizing
                        energy efficiency.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <div className="mt-0">
                      <p
                        style={{ color: "orangered" }}
                        className="font-semibold text-white mb-2"
                      >
                        Our Services Include:
                      </p>
                      <ul className="list-disc ml-5 text-white text-sm">
                        <li className="mb-1">Maintenance and fault finding</li>
                        <li className="mb-1">Dimmers & Transformers</li>
                        <li className="mb-1">
                          Portable Appliance Testing (PAT)
                        </li>
                        <li className="mb-1">
                          Testing Inspection and Electrical Reports
                        </li>
                        <li className="mb-1">Additional Points</li>
                        <li className="mb-1">Emergency lighting</li>
                        <li className="mb-1">Commercial Lamp Replacements</li>
                        <li className="mb-1">New Installations</li>
                        <li className="mb-1">RCD Faults</li>
                        <li className="mb-1">Re-wires</li>
                      </ul>
                      <p className="mt-4 text-sm text-white">
                        🔧 Reliable. Efficient. Future-Ready. Let us power your
                        industry with expertise and innovation.
                      </p>
                    </div>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Close</AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardFooter>
            </Card>
          </div>

          <div className="services-3">
            <Card>
              <img
                src={image3}
                className="w-full h-auto max-h-60 object-cover rounded-t-xl"
              />

              <CardHeader>
                <CardTitle>Domestic Service</CardTitle>
                <CardDescription>Residential</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Reliable and efficient electrical solutions for your home. We
                  ensure safe installations, and seamless power management to
                  keep your household running smoothly.
                </p>
              </CardContent>
              <CardFooter>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <button className="services-button">Read More</button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Domestic Services</AlertDialogTitle>
                      <AlertDialogDescription>
                        Providing safe, efficient, and reliable electrical
                        solutions for your home. Our expert team ensures
                        seamless installations, energy efficiency, and long-term
                        safety for a worry-free living environment.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <div className="mt-0">
                      <p
                        style={{ color: "orangered" }}
                        className="font-semibold text-white mb-2"
                      >
                        Our Services Include:
                      </p>
                      <ul className="list-disc ml-5 text-white text-sm">
                        <li className="mb-1">
                          Home Wiring & Electrical Installations
                        </li>
                        <li className="mb-1">
                          Lighting & Smart Home Automation
                        </li>
                        <li className="mb-1">
                          Power Backup & Inverter Solutions
                        </li>
                        <li className="mb-1">Appliance & Circuit Repairs</li>
                        <li className="mb-1">Energy-Efficient Solutions</li>
                        <li className="mb-1">
                          Safety Inspections & Compliance
                        </li>
                        <li className="mb-1">Surge Protection & Earthing</li>
                      </ul>
                      <p className="mt-4 text-sm text-white">
                        🏡 Safe. Smart. Energy-Efficient. Power your home with
                        trusted electrical expertise.
                      </p>
                    </div>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Close</AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
