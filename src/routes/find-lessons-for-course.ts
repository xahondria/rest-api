import { NextFunction, Request, Response } from 'express';
import { logger } from '../logger';
import { isInteger } from '../utils';

export async function findLessonsForCourse(
  request: Request, response: Response, next: NextFunction
) {

  try {
    logger.debug('Called findLessonsForCourse()');

    const courseId = request.params.courseId,
      query = request.query as any,
      pageNumber = query?.pageNumber ?? 0,
      pageSize = query?.pageSize ?? 3;

    if (!isInteger(courseId)) {
      throw `Invalid courseId ${ courseId }`;
    }

    if (!isInteger(pageNumber)) {
      throw `Invalid courseId ${ pageNumber }`;
    }

    if (!isInteger(pageSize)) {
      throw `Invalid courseId ${ pageSize }`;
    }


  } catch (error) {
    logger.error('Error calling findLessonsForCourse()');
    return next(error);
  }

}
