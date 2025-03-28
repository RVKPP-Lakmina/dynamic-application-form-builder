import { Settings } from "lucide-react";

const SettingsPage = () => {
  return (
    <div className="p-10">
      <div className="flex align-center gap-4">
        <Settings className="text-gray-700" />
        <h1 className="font-bold text-lg text-gray-700">Settings</h1>
      </div>
      <div className="border border-gray-500/15" />
    </div>
  );
};

export default SettingsPage;
