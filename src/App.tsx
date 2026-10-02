export default function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="max-w-sm overflow-hidden rounded-2xl bg-white shadow-xl shadow-slate-200">
        <img
          src="https://placehold.co/400x250"
          alt="Produto"
          className="h-48 w-full object-cover"
        />

        <div className="p-6">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Notebook Gamer
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            RTX 4060, 16GB RAM, Ryzen 7
          </p>
          <p className="mt-4 text-2xl font-extrabold text-blue-600">
            R$ 6.999,00
          </p>
          <button className="mt-5 w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700">
            Comprar
          </button>
        </div>
      </div>
    </main>
  );
}
