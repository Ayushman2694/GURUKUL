import Container from "../components/settings/Container";

export default function AddUserAdmin() {
  return (
    <div className="w-full p-4">
      <div className="w-full">
        <h1 className="text-3xl font-bold ">Admin Settings</h1>
      </div>
      <div className="w-full p-6 min-h-screen">
        {/* Admin Section */}
        <Container title="Admin" addButtonLabel="Add Admin" />

        {/* User Section */}
        <Container title="User" addButtonLabel="Add User" />
      </div>
    </div>
  );
}
