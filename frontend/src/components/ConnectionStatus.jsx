import { WifiOff, Wifi } from 'lucide-react';

function ConnectionStatus({ isOnline }) {
  if (isOnline) return null;

  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
      <div className="flex items-center">
        <WifiOff className="h-5 w-5 text-yellow-400 mr-3" />
        <div>
          <p className="text-sm font-medium text-yellow-800">
            Sin conexión a internet
          </p>
          <p className="text-sm text-yellow-700 mt-1">
            Estás viendo entradas guardadas localmente. No puedes crear nuevas entradas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ConnectionStatus;