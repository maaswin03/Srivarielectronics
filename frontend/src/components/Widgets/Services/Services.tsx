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
    <section id="Services">
      <div className="services-1">
        <h1>Our Services</h1>
        <p>We offer services that are reliable, innovative, and efficient.</p>
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
                  We provide top-tier electrical solutions for businesses,
                  ensuring safety, efficiency, and seamless power management for
                  offices, shops, and malls.
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
                        We provide top-tier electrical solutions for businesses,
                        ensuring safety, efficiency, and seamless power
                        management for offices, shops, and malls.
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
                  Our expert team delivers reliable electrical installations,
                  automation, and maintenance for factories, warehouses, and
                  plants, ensuring uninterrupted operations.
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
                        Our expert team delivers reliable electrical
                        installations, automation, and maintenance for
                        factories, warehouses, and plants, ensuring
                        uninterrupted operations.{" "}
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
                <CardTitle>Residential Services</CardTitle>
                <CardDescription>Domestic</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  We offer safe, efficient, and customized electrical solutions,
                  including wiring, lighting, and automation, enhancing comfort
                  and energy efficiency in homes.
                </p>
              </CardContent>
              <CardFooter>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <button className="services-button">Read More</button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Residential Services</AlertDialogTitle>
                      <AlertDialogDescription>
                        We offer safe, efficient, and customized electrical
                        solutions, including wiring, lighting, and automation,
                        enhancing comfort and energy efficiency in homes.
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
    </section>
  );
}
