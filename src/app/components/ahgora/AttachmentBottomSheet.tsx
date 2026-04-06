import { AttachFile } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import SnippetFolderIcon from '@mui/icons-material/SnippetFolder';

interface AttachmentBottomSheetProps {
  onClose: () => void;
  onSelect: (source: 'camera' | 'gallery' | 'files') => void;
  isVisible: boolean;
}

export function AttachmentBottomSheet({ onClose, onSelect, isVisible }: AttachmentBottomSheetProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[60] flex items-end justify-center animate-in fade-in duration-200 font-['Open_Sans']">
      <div className="bg-white relative rounded-t-[8px] w-full sm:max-w-md overflow-hidden animate-in slide-in-from-bottom-full fade-in duration-300 shadow-xl">
        {/* Header + Body */}
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
          {/* Header */}
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                {/* Blue Icon Circle */}
                <div className="bg-primary content-stretch flex items-center justify-center p-[8px] relative rounded-[56px] shrink-0 size-[42px]">
                  <AttachFile sx={{ color: 'white', fontSize: 24, transform: 'rotate(45deg)' }} />
                </div>
                {/* Close Button */}
                <button 
                  onClick={onClose}
                  className="content-stretch flex flex-col items-center relative shrink-0 p-1 hover:bg-gray-100 rounded-full"
                >
                  <CloseIcon sx={{ color: '#3A3A45', fontSize: 20 }} />
                </button>
              </div>
            </div>
            {/* Title */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <p className="font-['Open_Sans'] font-semibold leading-[30px] relative shrink-0 text-[#3a3a45] text-[20px] tracking-[0.03px] w-full whitespace-pre-wrap">
                Adicionar anexo
              </p>
            </div>
            {/* Description */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <p className="font-['Open_Sans'] leading-[20px] not-italic relative shrink-0 text-[#3a3a45] text-[14px] tracking-[0.028px] w-full whitespace-pre-wrap">
                Escolha uma opção abaixo para adicionar seu anexo.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            {/* Camera Button */}
            <button 
              onClick={() => onSelect('camera')}
              className="bg-primary content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 w-full hover:bg-primary/90 transition-colors"
            >
              <div className="relative shrink-0 w-full">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center justify-center px-[22px] py-[8px] relative w-full">
                    <PhotoCameraIcon sx={{ color: 'white' }} />
                    <p className="font-['Open_Sans'] font-semibold leading-[26px] relative shrink-0 text-[15px] text-white tracking-[0.46px]">
                      Câmera
                    </p>
                  </div>
                </div>
              </div>
            </button>

            {/* Gallery Button */}
            <button 
              onClick={() => onSelect('gallery')}
              className="bg-primary content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 w-full hover:bg-primary/90 transition-colors"
            >
              <div className="relative shrink-0 w-full">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center justify-center px-[22px] py-[8px] relative w-full">
                    <PhotoLibraryIcon sx={{ color: 'white' }} />
                    <p className="font-['Open_Sans'] font-semibold leading-[26px] relative shrink-0 text-[15px] text-white tracking-[0.46px]">
                      Galeria
                    </p>
                  </div>
                </div>
              </div>
            </button>

            {/* Files Button */}
            <button 
              onClick={() => onSelect('files')}
              className="bg-primary content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 w-full hover:bg-primary/90 transition-colors"
            >
              <div className="relative shrink-0 w-full">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center justify-center px-[22px] py-[8px] relative w-full">
                    <SnippetFolderIcon sx={{ color: 'white' }} />
                    <p className="font-['Open_Sans'] font-semibold leading-[26px] relative shrink-0 text-[15px] text-white tracking-[0.46px]">
                      Arquivos
                    </p>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[rgba(42,42,51,0.12)] border-solid border-t inset-0 pointer-events-none" />
          <div className="content-stretch flex items-center justify-end p-[24px] relative w-full">
             <button 
               onClick={onClose}
               className="bg-primary content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 w-full hover:bg-primary/90 transition-colors"
             >
                <div className="relative shrink-0 w-full">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex gap-[8px] items-center justify-center px-[22px] py-[8px] relative w-full">
                      <p className="font-['Open_Sans'] font-semibold leading-[26px] relative shrink-0 text-[16px] text-white tracking-[0.46px]">
                        Cancelar
                      </p>
                    </div>
                  </div>
                </div>
             </button>
          </div>
        </div>

      </div>
    </div>
  );
}
