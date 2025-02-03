import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const Settings = () => {
  const { theme, setTheme } = useTheme();
  const [navigationStyle, setNavigationStyle] = useState("sidebar");
  const [customColors, setCustomColors] = useState({
    background: "#ffffff",
    sidebar: "#f8f9fa",
    header: "#ffffff",
    text: "#000000",
    borderRadius: "0.5",
  });

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    toast({
      title: "Theme Updated",
      description: `Theme changed to ${newTheme} mode`,
    });
  };

  const handleNavigationChange = (style: string) => {
    setNavigationStyle(style);
    toast({
      title: "Navigation Updated",
      description: `Navigation style changed to ${style}`,
    });
  };

  const handleColorChange = (key: string, value: string) => {
    setCustomColors((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSaveAPIConfig = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "API Configuration Saved",
      description: "Your API settings have been updated successfully",
    });
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <Tabs defaultValue="appearance">
        <TabsList>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="api">API Configuration</TabsTrigger>
        </TabsList>

        <TabsContent value="appearance">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Theme Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="theme-toggle">Dark Mode</Label>
                  <Switch
                    id="theme-toggle"
                    checked={theme === "dark"}
                    onCheckedChange={handleThemeChange}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="nav-style">Navigation Style</Label>
                  <div className="space-x-2">
                    <Button
                      variant={navigationStyle === "sidebar" ? "default" : "outline"}
                      onClick={() => handleNavigationChange("sidebar")}
                    >
                      Sidebar
                    </Button>
                    <Button
                      variant={navigationStyle === "header" ? "default" : "outline"}
                      onClick={() => handleNavigationChange("header")}
                    >
                      Header
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Custom Colors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="background-color">Background Color</Label>
                      <Input
                        id="background-color"
                        type="color"
                        value={customColors.background}
                        onChange={(e) => handleColorChange("background", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sidebar-color">Sidebar Color</Label>
                      <Input
                        id="sidebar-color"
                        type="color"
                        value={customColors.sidebar}
                        onChange={(e) => handleColorChange("sidebar", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="header-color">Header Color</Label>
                      <Input
                        id="header-color"
                        type="color"
                        value={customColors.header}
                        onChange={(e) => handleColorChange("header", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="text-color">Text Color</Label>
                      <Input
                        id="text-color"
                        type="color"
                        value={customColors.text}
                        onChange={(e) => handleColorChange("text", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="border-radius">Border Radius (rem)</Label>
                    <Input
                      id="border-radius"
                      type="number"
                      min="0"
                      max="2"
                      step="0.1"
                      value={customColors.borderRadius}
                      onChange={(e) => handleColorChange("borderRadius", e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="api">
          <Card>
            <CardHeader>
              <CardTitle>API Configuration</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSaveAPIConfig} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="mysql-connection">MySQL Connection String</Label>
                  <Input
                    id="mysql-connection"
                    type="text"
                    placeholder="mysql://user:password@localhost:3306/database"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="groq-api">Groq AI API Key</Label>
                  <Input
                    id="groq-api"
                    type="password"
                    placeholder="Enter your Groq AI API key"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp-api">WhatsApp API Key</Label>
                  <Input
                    id="whatsapp-api"
                    type="password"
                    placeholder="Enter your WhatsApp Business API key"
                  />
                </div>

                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="smtp-host">SMTP Host</Label>
                    <Input
                      id="smtp-host"
                      type="text"
                      placeholder="smtp.example.com"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="smtp-user">SMTP Username</Label>
                      <Input
                        id="smtp-user"
                        type="text"
                        placeholder="username"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="smtp-pass">SMTP Password</Label>
                      <Input
                        id="smtp-pass"
                        type="password"
                        placeholder="password"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="smtp-port">SMTP Port</Label>
                    <Input
                      id="smtp-port"
                      type="number"
                      placeholder="587"
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full">
                  Save API Configuration
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;