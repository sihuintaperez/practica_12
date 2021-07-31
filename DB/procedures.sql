delimiter //
CREATE PROCEDURE `AddOrUpdate` (
  IN _id INT,
  IN _name VARCHAR(45),
  IN _apellido VARCHAR(45),
  IN _edad INT(11),
  IN _fecha_nacimiento INT(11) 
)
BEGIN 
  IF _id = 0 THEN
    INSERT INTO persona (name,apellido,edad,fecha_nacimiento)
    VALUES (_name,_apellido,_edad,_fecha_nacimiento);
    SET _id = LAST_INSERT_ID();
    ELSE
    UPDATE persona
    SET
    name = _name,
    apellido=_apellido ,
    edad=_edad ,
    fecha_nacimiento=_fecha_nacimiento 
    WHERE id = _id;
  END IF;

  SELECT _id AS 'id';
END//
