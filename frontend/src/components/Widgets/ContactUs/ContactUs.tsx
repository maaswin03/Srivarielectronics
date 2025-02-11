import { Input } from "@/components/ui/input";
import "./ContactUs.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import image1 from "@/image/image1.jpg";

export default function ContactUs() {
  return (
    <>
      <div className="ContactUs-1">
        <h1>Contact Us</h1>
        <p>Connecting you with reliable, innovative, and efficient solutions</p>
        <div className="ContactUs-2">
          <div className="ContactUs-3 ContactUs-4">
            <Card>
              <img
                src={image1}
                className="w-full h-auto max-h-60 object-cover rounded-t-xl"
              />
              <CardHeader>
                <CardTitle>Sri Vari Electricals</CardTitle>
                <CardDescription>Business</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  We provide reliable electrical solutions. Connect with us via
                  call or email for inquiries.
                </p>
                <div className="ContactUs-10">
                  <ul>
                    <li>
                      <a href="tel:+919843079070">
                        <div className="icon-box">
                          <FaPhoneAlt size={20} className="text-white" />
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="mailto:srivari.electricals24@gmail.com">
                        <div className="icon-box">
                          <IoMail size={20} className="text-white" />
                        </div>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.facebook.com/srivarielectricals"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="icon-box">
                          <FaFacebook size={20} className="text-white" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/srivarielectricals"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="icon-box">
                          <FaInstagram size={20} className="text-white" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/srivarielectricals"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="icon-box">
                          <FaYoutube size={20} className="text-white" />
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="ContactUs-3 ContactUs-5">
            <Card>
              <CardHeader>
                <CardTitle>Request A Consultation</CardTitle>
              </CardHeader>{" "}
              <form>
                <CardContent>
                  <div className="ContactUs-7">
                    <Input type="text" placeholder="Enter Name" required />
                  </div>
                  <div className="ContactUs-7">
                    <Input type="email" placeholder="Enter Email" required />
                  </div>
                  <div className="ContactUs-7">
                    <Input
                      type="text"
                      placeholder="Enter Phone number"
                      required
                    />
                  </div>
                  <div className="ContactUs-7">
                    <Input type="text" placeholder="Enter Subject" required />
                  </div>
                  <div className="ContactUs-7" style={{ marginBottom: "0" }}>
                    <Textarea
                      className="custom-textarea"
                      placeholder="Enter message"
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <button
                    className="services-button"
                    style={{ alignItems: "end" }}
                  >
                    Submit
                  </button>
                </CardFooter>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
