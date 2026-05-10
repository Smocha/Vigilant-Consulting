export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-gray-700 text-gray-400 py-6 px-4">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Vigilant Tech. All rights reserved.</p>
      </div>
    </footer>
  );
}