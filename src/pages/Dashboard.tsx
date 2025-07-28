import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Calendar, Target, Award } from "lucide-react";

export default function Dashboard() {
  // Mock data - in real app this would come from API
  const studentData = {
    name: "Maria Silva",
    currentPoints: 78,
    tier: "Gold",
    attendance: 92,
    grades: {
      math: 8.5,
      portuguese: 9.0,
      science: 7.8,
      history: 8.2,
      english: 8.8
    },
    classAverage: 7.2,
    schoolAverage: 6.8
  };

  const getTierColor = (tier: string) => {
    switch (tier.toLowerCase()) {
      case 'bronze': return 'bg-bronze text-white';
      case 'silver': return 'bg-silver text-white';
      case 'gold': return 'bg-gold text-white';
      case 'diamond': return 'bg-diamond text-white';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent/10">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, {studentData.name}! 🎓
          </h1>
          <p className="text-muted-foreground">
            Ready to continue your learning journey? You're doing amazing!
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card hover:shadow-elegant transition-smooth">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Points</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{studentData.currentPoints}</div>
              <div className="flex items-center space-x-2 mt-2">
                <Badge className={getTierColor(studentData.tier)}>
                  {studentData.tier} Tier
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-smooth">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Attendance</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{studentData.attendance}%</div>
              <Progress value={studentData.attendance} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-smooth">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Grade</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">
                {(Object.values(studentData.grades).reduce((a, b) => a + b, 0) / Object.values(studentData.grades).length).toFixed(1)}
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Above class average ({studentData.classAverage})
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-smooth">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Tier</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">Diamond</div>
              <p className="text-xs text-muted-foreground mt-2">
                {81 - studentData.currentPoints} points to go
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Grades Breakdown */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Subject Performance</CardTitle>
              <CardDescription>Your latest bimonthly grades</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(studentData.grades).map(([subject, grade]) => (
                <div key={subject} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium capitalize">{subject}</span>
                    <span className="text-sm font-bold">{grade.toFixed(1)}</span>
                  </div>
                  <Progress value={(grade / 10) * 100} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Comparison Chart */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Performance Comparison</CardTitle>
              <CardDescription>How you compare to averages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Your Performance</span>
                    <span className="text-sm font-bold text-primary">
                      {(Object.values(studentData.grades).reduce((a, b) => a + b, 0) / Object.values(studentData.grades).length).toFixed(1)}
                    </span>
                  </div>
                  <Progress value={85} className="h-3" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Class Average</span>
                    <span className="text-sm font-bold text-muted-foreground">
                      {studentData.classAverage}
                    </span>
                  </div>
                  <Progress value={72} className="h-3" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">School Average</span>
                    <span className="text-sm font-bold text-muted-foreground">
                      {studentData.schoolAverage}
                    </span>
                  </div>
                  <Progress value={68} className="h-3" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}