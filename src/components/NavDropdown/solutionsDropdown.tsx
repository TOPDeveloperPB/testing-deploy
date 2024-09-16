import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <LanguagesIcon className="h-6 w-6 text-pink-500" />,
    bgColor: 'bg-pink-100',
    title: " Integration (API)",
    description: "Translation Management System (TMS) integration to your CMS.",
  },
  {
    icon: <FileIcon className="h-6 w-6 text-green-500" />,
    bgColor: 'bg-green-100',
    title: "Translation memory",
    description: "Take advantage of Translation Memory (TM).",
  },
  {
    icon: <LocateIcon className="h-6 w-6 text-yellow-500" />,
    bgColor: 'bg-yellow-100',
    title: " Translation management system",
  description: "Smart Translation Management (TMS) allows you to automate the translation process at various stages. ",
  },
  {
    icon: <BadgeCheckIcon className="h-6 w-6 text-blue-500" />,
    bgColor: 'bg-blue-100',
    title: "Optimization",
    description: " Tool which allow you to monitor and comment on translations in one of the most advanced CAT tools in the world. ",
  },

];

export default function SolutionDropdown() {
  return (
    <Card className="max-w-4xl mx-auto rounded-lg ">
      <CardContent className="p-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className={`p-2 ${service.bgColor} rounded-lg`}>
                {service.icon}
              </div>
              <div>
                <h3 className="font-bold text-sm text-primary">{service.title}</h3>
                <p className="text-sm font-normal text-primary">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 md:p-8 bg-[#fff5f0]">
        <div className="flex items-center justify-between w-full">
          <div>
            <h3 className="font-bold text-xl text-secondary">Pricing</h3>
            <p className="text-sm font-normal text-popover">
              Discover our flexible, competitive pricing for all your translation needs.
            </p>
          </div>
          <Button className="bg-orange-600 text-white">Learn More</Button>
        </div>
      </CardFooter>
    </Card>
  );
}

function AudioLinesIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 10v3" />
      <path d="M6 6v11" />
      <path d="M10 3v18" />
      <path d="M14 8v7" />
      <path d="M18 5v13" />
      <path d="M22 10v3" />
    </svg>
  )
}


function BadgeCheckIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}


function CopyrightIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
    </svg>
  )
}


function DotIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12.1" cy="12.1" r="1" />
    </svg>
  )
}


function FileIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  )
}


function LanguagesIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 8 6 6" />
      <path d="m4 14 6-6 2-3" />
      <path d="M2 5h12" />
      <path d="M7 2h1" />
      <path d="m22 22-5-10-5 10" />
      <path d="M14 18h6" />
    </svg>
  )
}


function LocateIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}