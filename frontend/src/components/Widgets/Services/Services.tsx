import "./Services.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import image1 from "@/image/image1.jpg";
import image2 from "@/image/image2.jpg";
import image3 from "@/image/image3.jpg";

export default function Services() {
  return (
    <>
      <div className="services-1">
        <h1>Our Services</h1>
        <p>
          More than solutions—delivering reliability, innovation, and
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
                <button className="services-button">Read More</button>
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
                <button className="services-button">Read More</button>
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
                <button className="services-button">Read More</button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
