import React from "react";
import {
  Typography,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "@material-tailwind/react";
import { FingerPrintIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard } from "@/widgets/cards";

export function Home() {
  return (
    <>
      <div className="relative flex h-[50vh] content-center items-center justify-center pt-16 pb-26">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography variant="h1" color="white" className="mb-6 font-black">
                हनुमान मंदिर ग्रेटर फाउंडेशन, रीवा, मध्य प्रदेश, भारत
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                इस संस्थान का उद्देश्य सनातन धर्म का सम्पोषण करना और भारतीय संस्कृति के संरक्षण के लिए प्रयासरत रहना है।
              </Typography>
            </div>
          </div>
        </div>
      </div>
      
      <section className="-mt-32 bg-white px-4 pb-20 pt-32">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
          <Typography variant="h4" color="blue-gray" className="font-bold mb-14">
              
            </Typography>
            <Typography variant="h4" color="blue-gray" className="font-bold mb-4">
              **स्थाई पता:**
            </Typography>
            <Typography variant="body1" color="blue-gray">
              ग्राम-बड़ाछ, पोस्ट-चंपागढ़, तहसील-जवा, जिला-रीवा, मध्य प्रदेश, पिन- ४८६२२३
            </Typography>
            <Typography variant="h4" color="blue-gray" className="font-bold mt-8 mb-4">
              **पत्राचार का पता:**
            </Typography>
            <Typography variant="body1" color="blue-gray">
              पुष्पा त्रिपाठी, M L C T कॉलेज के पीछे, यूनिवर्सिटी रोड, इटौरा, रीवा, मध्य प्रदेश, पिन कोड, ४८६00३
            </Typography>
          </div>





          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              color="blue"
              title="संस्था का उद्देश्य"
              description="सनातन धर्म का सम्पोषण, वेद विद्या का प्रचार प्रसार और भारतीय संस्कृति के संरक्षण हेतु कार्यरत।"
            />
            <FeatureCard
              color="red"
              title="वेद/संस्कृत विद्यालय"
              description="संस्था द्वारा गुरुकुल पद्धति से वेद और संस्कृत पाठशाला का संचालन किया जा रहा है।"
            />
            <FeatureCard
              color="green"
              title="गौशाला"
              description="संस्था द्वारा गौशाला का संचालन किया जाता है, जो भारतीय संस्कृति का हिस्सा है।"
            />
          </div>
        </div>
      </section>

      <section className="px-4 pt-20 pb-12">
        <div className="container mx-auto">
          <PageTitle section="संस्था का कार्य" heading="संस्था के मुख्य सेवा क्षेत्र">
            हमारी संस्था विभिन्न क्षेत्रों में कार्य करती है:
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-3">
            <Card
              key="वेद/संस्कृत विद्यालय"
              color="transparent"
              shadow={false}
              className="text-center text-blue-gray-900"
            >
              <Typography variant="h5" color="blue-gray" className="mb-2">
                वेद/संस्कृत विद्यालय
              </Typography>
              <Typography className="font-normal text-blue-gray-500">
                गुरुकुल पद्धति से वैदिक शिक्षा प्रदान करना।
              </Typography>
            </Card>
            <Card
              key="अन्न क्षेत्र"
              color="transparent"
              shadow={false}
              className="text-center text-blue-gray-900"
            >
              <Typography variant="h5" color="blue-gray" className="mb-2">
                अन्न क्षेत्र
              </Typography>
              <Typography className="font-normal text-blue-gray-500">
                सामूहिक रूप से अन्न वितरण की व्यवस्था।
              </Typography>
            </Card>
            <Card
              key="सामूहिक यज्ञोपवीत"
              color="transparent"
              shadow={false}
              className="text-center text-blue-gray-900"
            >
              <Typography variant="h5" color="blue-gray" className="mb-2">
                सामूहिक यज्ञोपवीत
              </Typography>
              <Typography className="font-normal text-blue-gray-500">
                सामूहिक यज्ञोपवीत संस्कार की प्रक्रिया।
              </Typography>
            </Card>
          </div>
        </div>


        <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-2xl">
                <FingerPrintIcon className="h-8 w-8 text-white " />
              </div>
              <Typography variant="h3" className="mb-3 font-bold" color="blue-gray">
                संस्था का उद्देश्य
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                "जननी जन्मभूमिश्च स्वर्गादपि गरीयसी" की भावना से हम भारतीय संस्कृति के उत्थान और वेद विद्या के प्रचार-प्रसार के लिए निरंतर कार्यरत हैं।
              </Typography>
              <Button variant="filled">अधिक जानें</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-2xl border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="src\images\image1.png"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className="font-normal">गौशाला</Typography>
                  <Typography variant="h5" color="blue-gray" className="mb-3 mt-2 font-bold">
                    हमारे गौशाला में भारतीय संस्कृति की प्रमुखता है
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    हमारे गौशाला में भारतीय परंपरा और संस्कृति के अनुसार गायों की देखभाल की जाती है।
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
      </section>


      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
