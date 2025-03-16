import { motion } from 'framer-motion';

interface TotoroMascotProps {
  isAwake: boolean;
}

export function TotoroMascot({isAwake}: TotoroMascotProps) {
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-40 pointer-events-none w-32 h-32"
      animate={{
        scale: isAwake ? 1.2 : 1,
        y: isAwake ? -20 : 0
      }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
      <img
        src={isAwake ? './awake.svg' : './spleeping.svg'} 
        alt={isAwake ? 'Totoro Awake' : 'Totoro Sleeping'}
        className="w-full h-full transition-opacity duration-300"
      />

      {!isAwake && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 0],
            y: [-10, -20, -30],
            x: [0, 5, 10]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
          className="absolute top-0 right-0 font-bold text-gray-800"
          style={{ fontSize: '12px' }}
        >
          <div style={{ transform: 'translate(75px, 30px)' }}>Z</div>
          <div style={{ transform: 'translate(82px, 25px)', fontSize: '10px' }}>z</div>
          <div style={{ transform: 'translate(88px, 20px)', fontSize: '8px' }}>z</div>
        </motion.div>
      )}
    </motion.div>
  );
}