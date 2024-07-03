import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-3xl font-bold">Welcome to MyApp</h1>
      <p className="text-lg">This is a bare-bones application to get you started.</p>
      <Card>
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Use this application as a starting point to build your own features and components.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;