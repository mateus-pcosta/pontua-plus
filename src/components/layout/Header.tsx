import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { processImageFromUrl } from "@/lib/backgroundRemoval";
import { useTheme } from "@/components/theme-provider";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const navItems = [
  { name: "Desempenho", href: "/dashboard" },
  { name: "Ranking", href: "/ranking" },
  { name: "Recompensas", href: "/rewards" },
  { name: "Acessibilidade", href: "/accessibility" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [processedLogoUrl, setProcessedLogoUrl] = useState<string>("/lovable-uploads/9a97138e-ca9d-4e6c-b374-d87531336ad9.png");
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    // Choose logo based on theme - use dark logo for light theme, light logo for dark theme
    const logoPath = theme === 'dark' 
      ? "/lovable-uploads/6c85cea1-3554-4699-826c-05f108681328.png" // Light logo for dark theme
      : "/lovable-uploads/6a6db8e8-7eb3-462f-945c-435ea04b49da.png"; // Dark logo for light theme

    // Use logos directly without background removal
    setProcessedLogoUrl(logoPath);
  }, [theme]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center space-x-2">
            <img 
              src={processedLogoUrl}
              alt="Pontua+" 
              className="h-24 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-smooth ${
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Profile & Logout */}
          <div className="hidden md:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>Perfil</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/login" className="flex items-center space-x-2 text-destructive">
                    <LogOut className="h-4 w-4" />
                    <span>Sair</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-sm font-medium rounded-lg transition-smooth ${
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-border pt-2 mt-2">
                <Link
                  to="/profile"
                  className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Perfil
                </Link>
                <Link
                  to="/login"
                  className="block px-3 py-2 text-sm font-medium text-destructive hover:bg-accent rounded-lg transition-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sair
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};