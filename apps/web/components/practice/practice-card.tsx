// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Clock, Award, Users } from "lucide-react";
// import Link from "next/link";
// import { PracticeSet } from "@/lib/types/practice";

// interface PracticeSetCardProps {
//   practiceSet: PracticeSet;
// }

// export function PracticeSetCard({ practiceSet }: PracticeSetCardProps) {
//   const getDifficultyColor = (difficulty: string) => {
//     switch (difficulty) {
//       case "easy":
//         return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300";
//       case "medium":
//         return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300";
//       case "hard":
//         return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300";
//       default:
//         return "";
//     }
//   };

//   return (
//     <Card className="hover:shadow-md transition-shadow">
//       <CardHeader className="pb-3">
//         <div className="flex justify-between items-start gap-2">
//           <div>
//             <CardTitle className="text-lg">{practiceSet.title}</CardTitle>
//             <div className="flex flex-wrap gap-1 mt-2">
//               <Badge variant="outline">{practiceSet.subject}</Badge>
//               <Badge variant="outline">{practiceSet.topic}</Badge>
//               <Badge className={getDifficultyColor(practiceSet.difficulty)}>
//                 {practiceSet.difficulty.charAt(0).toUpperCase() + practiceSet.difficulty.slice(1)}
//               </Badge>
//             </div>
//           </div>
//         </div>
//       </CardHeader>
//       <CardContent className="pt-0">
//         <div className="grid grid-cols-3 gap-2 text-sm">
//           <div className="flex items-center gap-1 text-muted-foreground">
//             <Clock className="h-4 w-4" />
//             <span>{practiceSet.timeLimit}m</span>
//           </div>
//           <div className="flex items-center gap-1 text-muted-foreground">
//             <Users className="h-4 w-4" />
//             <span>{practiceSet.attempts}</span>
//           </div>
//           <div className="flex items-center gap-1 text-muted-foreground">
//             <Award className="h-4 w-4" />
//             <span>{practiceSet.averageScore}%</span>
//           </div>
//         </div>
//         <Button className="mt-3 w-full gradient-primary hover-lift" asChild>
//           <Link href={`/dashboard/practice-zone/${practiceSet.id}`}>
//             Start
//           </Link>
//         </Button>
//         {/* <Button className="w-full gradient-primary hover-lift" asChild>
//           <Link href={`/dashboard/exam/${exam.id}`}>Start Exam</Link>
//         </Button> */}
//       </CardContent>
//     </Card>
//   );
// }