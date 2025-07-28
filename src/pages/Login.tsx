import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen gradient-primary flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-elegant">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/6c85cea1-3554-4699-826c-05f108681328.png" 
              alt="Pontua+" 
              className="h-12 w-auto"
            />
          </div>
          <CardTitle className="text-2xl font-semibold">
            {isSignUp ? "Join Pontua+" : "Welcome back"}
          </CardTitle>
          <CardDescription>
            {isSignUp 
              ? "Create your account to start your gamified learning journey" 
              : "Sign in to your account to continue learning"
            }
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <form className="space-y-4">
            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  placeholder="Enter your full name" 
                  className="rounded-xl"
                />
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Enter your email" 
                className="rounded-xl"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input 
                  id="password" 
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="rounded-xl pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            
            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="teacher">Teacher</SelectItem>
                    <SelectItem value="principal">Principal</SelectItem>
                    <SelectItem value="guardian">Guardian</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
            
            {!isSignUp && (
              <div className="text-right">
                <Link 
                  to="/forgot-password" 
                  className="text-sm text-primary hover:text-primary/80 transition-smooth"
                >
                  Forgot password?
                </Link>
              </div>
            )}
            
            <Button 
              variant="gradient" 
              size="lg" 
              className="w-full"
              asChild
            >
              <Link to="/dashboard">
                {isSignUp ? "Create Account" : "Sign In"}
              </Link>
            </Button>
          </form>
          
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
            </p>
            <Button 
              variant="ghost" 
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-primary hover:text-primary/80"
            >
              {isSignUp ? "Sign in here" : "Sign up here"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}